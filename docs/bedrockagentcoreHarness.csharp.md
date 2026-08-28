# `bedrockagentcoreHarness` Submodule <a name="`bedrockagentcoreHarness` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreHarness"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreHarness <a name="BedrockagentcoreHarness" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness awscc_bedrockagentcore_harness}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarness(Construct Scope, string Id, BedrockagentcoreHarnessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig">BedrockagentcoreHarnessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig">BedrockagentcoreHarnessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration">PutAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact">PutEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory">PutMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel">PutModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills">PutSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt">PutSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools">PutTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation">PutTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAllowedTools">ResetAllowedTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAuthorizerConfiguration">ResetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentArtifact">ResetEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxIterations">ResetMaxIterations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSkills">ResetSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSystemPrompt">ResetSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTools">ResetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTruncation">ResetTruncation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizerConfiguration` <a name="PutAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration"></a>

```csharp
private void PutAuthorizerConfiguration(BedrockagentcoreHarnessAuthorizerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment"></a>

```csharp
private void PutEnvironment(BedrockagentcoreHarnessEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

---

##### `PutEnvironmentArtifact` <a name="PutEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact"></a>

```csharp
private void PutEnvironmentArtifact(BedrockagentcoreHarnessEnvironmentArtifact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

---

##### `PutMemory` <a name="PutMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory"></a>

```csharp
private void PutMemory(BedrockagentcoreHarnessMemory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

---

##### `PutModel` <a name="PutModel" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel"></a>

```csharp
private void PutModel(BedrockagentcoreHarnessModel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

---

##### `PutSkills` <a name="PutSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills"></a>

```csharp
private void PutSkills(IResolvable|BedrockagentcoreHarnessSkills[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

---

##### `PutSystemPrompt` <a name="PutSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt"></a>

```csharp
private void PutSystemPrompt(IResolvable|BedrockagentcoreHarnessSystemPrompt[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockagentcoreHarnessTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

---

##### `PutTools` <a name="PutTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools"></a>

```csharp
private void PutTools(IResolvable|BedrockagentcoreHarnessTools[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

---

##### `PutTruncation` <a name="PutTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation"></a>

```csharp
private void PutTruncation(BedrockagentcoreHarnessTruncation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

---

##### `ResetAllowedTools` <a name="ResetAllowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAllowedTools"></a>

```csharp
private void ResetAllowedTools()
```

##### `ResetAuthorizerConfiguration` <a name="ResetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAuthorizerConfiguration"></a>

```csharp
private void ResetAuthorizerConfiguration()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetEnvironmentArtifact` <a name="ResetEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentArtifact"></a>

```csharp
private void ResetEnvironmentArtifact()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetMaxIterations` <a name="ResetMaxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxIterations"></a>

```csharp
private void ResetMaxIterations()
```

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxTokens"></a>

```csharp
private void ResetMaxTokens()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetSkills` <a name="ResetSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSkills"></a>

```csharp
private void ResetSkills()
```

##### `ResetSystemPrompt` <a name="ResetSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSystemPrompt"></a>

```csharp
private void ResetSystemPrompt()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTools"></a>

```csharp
private void ResetTools()
```

##### `ResetTruncation` <a name="ResetTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTruncation"></a>

```csharp
private void ResetTruncation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreHarness resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreHarness.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreHarness.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreHarness.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreHarness.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreHarness resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreHarness to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreHarness that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreHarness to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifact">EnvironmentArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference">BedrockagentcoreHarnessEnvironmentArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessId">HarnessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memory">Memory</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference">BedrockagentcoreHarnessMemoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.model">Model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference">BedrockagentcoreHarnessModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skills">Skills</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList">BedrockagentcoreHarnessSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPrompt">SystemPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList">BedrockagentcoreHarnessSystemPromptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList">BedrockagentcoreHarnessTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList">BedrockagentcoreHarnessToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncation">Truncation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference">BedrockagentcoreHarnessTruncationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedToolsInput">AllowedToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfigurationInput">AuthorizerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifactInput">EnvironmentArtifactInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentInput">EnvironmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessNameInput">HarnessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterationsInput">MaxIterationsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokensInput">MaxTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memoryInput">MemoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.modelInput">ModelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skillsInput">SkillsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPromptInput">SystemPromptInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.toolsInput">ToolsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncationInput">TruncationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedTools">AllowedTools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessName">HarnessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterations">MaxIterations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfiguration"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationOutputReference AuthorizerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environment"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentOutputReference</a>

---

##### `EnvironmentArtifact`<sup>Required</sup> <a name="EnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifact"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentArtifactOutputReference EnvironmentArtifact { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference">BedrockagentcoreHarnessEnvironmentArtifactOutputReference</a>

---

##### `HarnessId`<sup>Required</sup> <a name="HarnessId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessId"></a>

```csharp
public string HarnessId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memory"></a>

```csharp
public BedrockagentcoreHarnessMemoryOutputReference Memory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference">BedrockagentcoreHarnessMemoryOutputReference</a>

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.model"></a>

```csharp
public BedrockagentcoreHarnessModelOutputReference Model { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference">BedrockagentcoreHarnessModelOutputReference</a>

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skills"></a>

```csharp
public BedrockagentcoreHarnessSkillsList Skills { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList">BedrockagentcoreHarnessSkillsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemPrompt`<sup>Required</sup> <a name="SystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPrompt"></a>

```csharp
public BedrockagentcoreHarnessSystemPromptList SystemPrompt { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList">BedrockagentcoreHarnessSystemPromptList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tags"></a>

```csharp
public BedrockagentcoreHarnessTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList">BedrockagentcoreHarnessTagsList</a>

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tools"></a>

```csharp
public BedrockagentcoreHarnessToolsList Tools { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList">BedrockagentcoreHarnessToolsList</a>

---

##### `Truncation`<sup>Required</sup> <a name="Truncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncation"></a>

```csharp
public BedrockagentcoreHarnessTruncationOutputReference Truncation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference">BedrockagentcoreHarnessTruncationOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AllowedToolsInput`<sup>Optional</sup> <a name="AllowedToolsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedToolsInput"></a>

```csharp
public string[] AllowedToolsInput { get; }
```

- *Type:* string[]

---

##### `AuthorizerConfigurationInput`<sup>Optional</sup> <a name="AuthorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfiguration AuthorizerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

---

##### `EnvironmentArtifactInput`<sup>Optional</sup> <a name="EnvironmentArtifactInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifactInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentArtifact EnvironmentArtifactInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironment EnvironmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `HarnessNameInput`<sup>Optional</sup> <a name="HarnessNameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessNameInput"></a>

```csharp
public string HarnessNameInput { get; }
```

- *Type:* string

---

##### `MaxIterationsInput`<sup>Optional</sup> <a name="MaxIterationsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterationsInput"></a>

```csharp
public double MaxIterationsInput { get; }
```

- *Type:* double

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokensInput"></a>

```csharp
public double MaxTokensInput { get; }
```

- *Type:* double

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memoryInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessMemory MemoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.modelInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModel ModelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

---

##### `SkillsInput`<sup>Optional</sup> <a name="SkillsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skillsInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSkills[] SkillsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

---

##### `SystemPromptInput`<sup>Optional</sup> <a name="SystemPromptInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPromptInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSystemPrompt[] SystemPromptInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tagsInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.toolsInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTools[] ToolsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

---

##### `TruncationInput`<sup>Optional</sup> <a name="TruncationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncationInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncation TruncationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

---

##### `AllowedTools`<sup>Required</sup> <a name="AllowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedTools"></a>

```csharp
public string[] AllowedTools { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `HarnessName`<sup>Required</sup> <a name="HarnessName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessName"></a>

```csharp
public string HarnessName { get; }
```

- *Type:* string

---

##### `MaxIterations`<sup>Required</sup> <a name="MaxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterations"></a>

```csharp
public double MaxIterations { get; }
```

- *Type:* double

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreHarnessAuthorizerConfiguration <a name="BedrockagentcoreHarnessAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfiguration {
    BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer CustomJwtAuthorizer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer BedrockagentcoreHarness#custom_jwt_authorizer}. |

---

##### `CustomJwtAuthorizer`<sup>Optional</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer CustomJwtAuthorizer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer BedrockagentcoreHarness#custom_jwt_authorizer}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer {
    string[] AllowedAudience = null,
    string[] AllowedClients = null,
    string[] AllowedScopes = null,
    IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] CustomClaims = null,
    string DiscoveryUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">AllowedAudience</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_audience BedrockagentcoreHarness#allowed_audience}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_clients BedrockagentcoreHarness#allowed_clients}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_scopes BedrockagentcoreHarness#allowed_scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">CustomClaims</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_claims BedrockagentcoreHarness#custom_claims}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#discovery_url BedrockagentcoreHarness#discovery_url}. |

---

##### `AllowedAudience`<sup>Optional</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```csharp
public string[] AllowedAudience { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_audience BedrockagentcoreHarness#allowed_audience}.

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_clients BedrockagentcoreHarness#allowed_clients}.

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_scopes BedrockagentcoreHarness#allowed_scopes}.

---

##### `CustomClaims`<sup>Optional</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] CustomClaims { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_claims BedrockagentcoreHarness#custom_claims}.

---

##### `DiscoveryUrl`<sup>Optional</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#discovery_url BedrockagentcoreHarness#discovery_url}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
    BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue AuthorizingClaimMatchValue = null,
    string InboundTokenClaimName = null,
    string InboundTokenClaimValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value BedrockagentcoreHarness#authorizing_claim_match_value}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name BedrockagentcoreHarness#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type BedrockagentcoreHarness#inbound_token_claim_value_type}. |

---

##### `AuthorizingClaimMatchValue`<sup>Optional</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue AuthorizingClaimMatchValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value BedrockagentcoreHarness#authorizing_claim_match_value}.

---

##### `InboundTokenClaimName`<sup>Optional</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```csharp
public string InboundTokenClaimName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name BedrockagentcoreHarness#inbound_token_claim_name}.

---

##### `InboundTokenClaimValueType`<sup>Optional</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```csharp
public string InboundTokenClaimValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type BedrockagentcoreHarness#inbound_token_claim_value_type}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
    string ClaimMatchOperator = null,
    BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue ClaimMatchValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#claim_match_operator BedrockagentcoreHarness#claim_match_operator}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#claim_match_value BedrockagentcoreHarness#claim_match_value}. |

---

##### `ClaimMatchOperator`<sup>Optional</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```csharp
public string ClaimMatchOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#claim_match_operator BedrockagentcoreHarness#claim_match_operator}.

---

##### `ClaimMatchValue`<sup>Optional</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue ClaimMatchValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#claim_match_value BedrockagentcoreHarness#claim_match_value}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
    string MatchValueString = null,
    string[] MatchValueStringList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">MatchValueString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#match_value_string BedrockagentcoreHarness#match_value_string}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">MatchValueStringList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#match_value_string_list BedrockagentcoreHarness#match_value_string_list}. |

---

##### `MatchValueString`<sup>Optional</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```csharp
public string MatchValueString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#match_value_string BedrockagentcoreHarness#match_value_string}.

---

##### `MatchValueStringList`<sup>Optional</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```csharp
public string[] MatchValueStringList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#match_value_string_list BedrockagentcoreHarness#match_value_string_list}.

---

### BedrockagentcoreHarnessConfig <a name="BedrockagentcoreHarnessConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ExecutionRoleArn,
    string HarnessName,
    BedrockagentcoreHarnessModel Model,
    string[] AllowedTools = null,
    BedrockagentcoreHarnessAuthorizerConfiguration AuthorizerConfiguration = null,
    BedrockagentcoreHarnessEnvironment Environment = null,
    BedrockagentcoreHarnessEnvironmentArtifact EnvironmentArtifact = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    double MaxIterations = null,
    double MaxTokens = null,
    BedrockagentcoreHarnessMemory Memory = null,
    IResolvable|BedrockagentcoreHarnessSkills[] Skills = null,
    IResolvable|BedrockagentcoreHarnessSystemPrompt[] SystemPrompt = null,
    IResolvable|BedrockagentcoreHarnessTags[] Tags = null,
    double TimeoutSeconds = null,
    IResolvable|BedrockagentcoreHarnessTools[] Tools = null,
    BedrockagentcoreHarnessTruncation Truncation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the harness assumes when running. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.harnessName">HarnessName</a></code> | <code>string</code> | The name of the harness. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.model">Model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a></code> | The model configuration for the harness. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.allowedTools">AllowedTools</a></code> | <code>string[]</code> | The tools that the agent is allowed to use. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a></code> | The inbound authorization configuration for authenticating incoming requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a></code> | The compute environment configuration for the harness, including underlying runtime information. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentArtifact">EnvironmentArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a></code> | The environment artifact for the harness, such as a custom container image. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables to set in the harness runtime environment. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxIterations">MaxIterations</a></code> | <code>double</code> | The maximum number of iterations the agent loop can execute per invocation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxTokens">MaxTokens</a></code> | <code>double</code> | The maximum number of tokens the agent can generate per iteration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.memory">Memory</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a></code> | The AgentCore Memory configuration for persisting conversation context. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.skills">Skills</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]</code> | The skills available to the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.systemPrompt">SystemPrompt</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]</code> | The system prompt that defines the agent's behavior. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]</code> | Tags to apply to the harness resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | The maximum duration in seconds for the agent loop execution per invocation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tools">Tools</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]</code> | The tools available to the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.truncation">Truncation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a></code> | The truncation configuration for managing conversation context. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that the harness assumes when running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#execution_role_arn BedrockagentcoreHarness#execution_role_arn}

---

##### `HarnessName`<sup>Required</sup> <a name="HarnessName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.harnessName"></a>

```csharp
public string HarnessName { get; set; }
```

- *Type:* string

The name of the harness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#harness_name BedrockagentcoreHarness#harness_name}

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.model"></a>

```csharp
public BedrockagentcoreHarnessModel Model { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

The model configuration for the harness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model BedrockagentcoreHarness#model}

---

##### `AllowedTools`<sup>Optional</sup> <a name="AllowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.allowedTools"></a>

```csharp
public string[] AllowedTools { get; set; }
```

- *Type:* string[]

The tools that the agent is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#allowed_tools BedrockagentcoreHarness#allowed_tools}

---

##### `AuthorizerConfiguration`<sup>Optional</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.authorizerConfiguration"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfiguration AuthorizerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

The inbound authorization configuration for authenticating incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#authorizer_configuration BedrockagentcoreHarness#authorizer_configuration}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environment"></a>

```csharp
public BedrockagentcoreHarnessEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

The compute environment configuration for the harness, including underlying runtime information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#environment BedrockagentcoreHarness#environment}

---

##### `EnvironmentArtifact`<sup>Optional</sup> <a name="EnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentArtifact"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentArtifact EnvironmentArtifact { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

The environment artifact for the harness, such as a custom container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#environment_artifact BedrockagentcoreHarness#environment_artifact}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables to set in the harness runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#environment_variables BedrockagentcoreHarness#environment_variables}

---

##### `MaxIterations`<sup>Optional</sup> <a name="MaxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxIterations"></a>

```csharp
public double MaxIterations { get; set; }
```

- *Type:* double

The maximum number of iterations the agent loop can execute per invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_iterations BedrockagentcoreHarness#max_iterations}

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxTokens"></a>

```csharp
public double MaxTokens { get; set; }
```

- *Type:* double

The maximum number of tokens the agent can generate per iteration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.memory"></a>

```csharp
public BedrockagentcoreHarnessMemory Memory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

The AgentCore Memory configuration for persisting conversation context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#memory BedrockagentcoreHarness#memory}

---

##### `Skills`<sup>Optional</sup> <a name="Skills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.skills"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSkills[] Skills { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

The skills available to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#skills BedrockagentcoreHarness#skills}

---

##### `SystemPrompt`<sup>Optional</sup> <a name="SystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.systemPrompt"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSystemPrompt[] SystemPrompt { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

The system prompt that defines the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#system_prompt BedrockagentcoreHarness#system_prompt}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tags"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

Tags to apply to the harness resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#tags BedrockagentcoreHarness#tags}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

The maximum duration in seconds for the agent loop execution per invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#timeout_seconds BedrockagentcoreHarness#timeout_seconds}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tools"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTools[] Tools { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

The tools available to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#tools BedrockagentcoreHarness#tools}

---

##### `Truncation`<sup>Optional</sup> <a name="Truncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.truncation"></a>

```csharp
public BedrockagentcoreHarnessTruncation Truncation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

The truncation configuration for managing conversation context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#truncation BedrockagentcoreHarness#truncation}

---

### BedrockagentcoreHarnessEnvironment <a name="BedrockagentcoreHarnessEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironment {
    BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment AgentCoreRuntimeEnvironment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.property.agentCoreRuntimeEnvironment">AgentCoreRuntimeEnvironment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_runtime_environment BedrockagentcoreHarness#agent_core_runtime_environment}. |

---

##### `AgentCoreRuntimeEnvironment`<sup>Optional</sup> <a name="AgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.property.agentCoreRuntimeEnvironment"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment AgentCoreRuntimeEnvironment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_runtime_environment BedrockagentcoreHarness#agent_core_runtime_environment}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment {
    IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[] FilesystemConfigurations = null,
    BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration LifecycleConfiguration = null,
    BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration NetworkConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.filesystemConfigurations">FilesystemConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#filesystem_configurations BedrockagentcoreHarness#filesystem_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration BedrockagentcoreHarness#lifecycle_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_configuration BedrockagentcoreHarness#network_configuration}. |

---

##### `FilesystemConfigurations`<sup>Optional</sup> <a name="FilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.filesystemConfigurations"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[] FilesystemConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#filesystem_configurations BedrockagentcoreHarness#filesystem_configurations}.

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.lifecycleConfiguration"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration LifecycleConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration BedrockagentcoreHarness#lifecycle_configuration}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_configuration BedrockagentcoreHarness#network_configuration}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations {
    BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage SessionStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.property.sessionStorage">SessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#session_storage BedrockagentcoreHarness#session_storage}. |

---

##### `SessionStorage`<sup>Optional</sup> <a name="SessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.property.sessionStorage"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage SessionStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#session_storage BedrockagentcoreHarness#session_storage}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage {
    string MountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.property.mountPath">MountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}. |

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration {
    double IdleRuntimeSessionTimeout = null,
    double MaxLifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.idleRuntimeSessionTimeout">IdleRuntimeSessionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout BedrockagentcoreHarness#idle_runtime_session_timeout}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.maxLifetime">MaxLifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_lifetime BedrockagentcoreHarness#max_lifetime}. |

---

##### `IdleRuntimeSessionTimeout`<sup>Optional</sup> <a name="IdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.idleRuntimeSessionTimeout"></a>

```csharp
public double IdleRuntimeSessionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout BedrockagentcoreHarness#idle_runtime_session_timeout}.

---

##### `MaxLifetime`<sup>Optional</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.maxLifetime"></a>

```csharp
public double MaxLifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_lifetime BedrockagentcoreHarness#max_lifetime}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration {
    string NetworkMode = null,
    BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig NetworkModeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_mode BedrockagentcoreHarness#network_mode}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_mode_config BedrockagentcoreHarness#network_mode_config}. |

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkMode"></a>

```csharp
public string NetworkMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_mode BedrockagentcoreHarness#network_mode}.

---

##### `NetworkModeConfig`<sup>Optional</sup> <a name="NetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkModeConfig"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig NetworkModeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#network_mode_config BedrockagentcoreHarness#network_mode_config}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig {
    string[] SecurityGroups = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#security_groups BedrockagentcoreHarness#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#subnets BedrockagentcoreHarness#subnets}. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#security_groups BedrockagentcoreHarness#security_groups}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#subnets BedrockagentcoreHarness#subnets}.

---

### BedrockagentcoreHarnessEnvironmentArtifact <a name="BedrockagentcoreHarnessEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentArtifact {
    BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration ContainerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#container_configuration BedrockagentcoreHarness#container_configuration}. |

---

##### `ContainerConfiguration`<sup>Optional</sup> <a name="ContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.property.containerConfiguration"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration ContainerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#container_configuration BedrockagentcoreHarness#container_configuration}.

---

### BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration <a name="BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration {
    string ContainerUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.property.containerUri">ContainerUri</a></code> | <code>string</code> | The ECR URI of the container. |

---

##### `ContainerUri`<sup>Optional</sup> <a name="ContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.property.containerUri"></a>

```csharp
public string ContainerUri { get; set; }
```

- *Type:* string

The ECR URI of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#container_uri BedrockagentcoreHarness#container_uri}

---

### BedrockagentcoreHarnessMemory <a name="BedrockagentcoreHarnessMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessMemory {
    BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration AgentCoreMemoryConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.property.agentCoreMemoryConfiguration">AgentCoreMemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_memory_configuration BedrockagentcoreHarness#agent_core_memory_configuration}. |

---

##### `AgentCoreMemoryConfiguration`<sup>Optional</sup> <a name="AgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.property.agentCoreMemoryConfiguration"></a>

```csharp
public BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration AgentCoreMemoryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_memory_configuration BedrockagentcoreHarness#agent_core_memory_configuration}.

---

### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration {
    string ActorId = null,
    string Arn = null,
    double MessagesCount = null,
    IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig> RetrievalConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.actorId">ActorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#actor_id BedrockagentcoreHarness#actor_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.messagesCount">MessagesCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.retrievalConfig">RetrievalConfig</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#retrieval_config BedrockagentcoreHarness#retrieval_config}. |

---

##### `ActorId`<sup>Optional</sup> <a name="ActorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.actorId"></a>

```csharp
public string ActorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#actor_id BedrockagentcoreHarness#actor_id}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}.

---

##### `MessagesCount`<sup>Optional</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.messagesCount"></a>

```csharp
public double MessagesCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}.

---

##### `RetrievalConfig`<sup>Optional</sup> <a name="RetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.retrievalConfig"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig> RetrievalConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#retrieval_config BedrockagentcoreHarness#retrieval_config}.

---

### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig {
    double RelevanceScore = null,
    string StrategyId = null,
    double TopK = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.relevanceScore">RelevanceScore</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#relevance_score BedrockagentcoreHarness#relevance_score}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.strategyId">StrategyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#strategy_id BedrockagentcoreHarness#strategy_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.topK">TopK</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}. |

---

##### `RelevanceScore`<sup>Optional</sup> <a name="RelevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.relevanceScore"></a>

```csharp
public double RelevanceScore { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#relevance_score BedrockagentcoreHarness#relevance_score}.

---

##### `StrategyId`<sup>Optional</sup> <a name="StrategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.strategyId"></a>

```csharp
public string StrategyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#strategy_id BedrockagentcoreHarness#strategy_id}.

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.topK"></a>

```csharp
public double TopK { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}.

---

### BedrockagentcoreHarnessModel <a name="BedrockagentcoreHarnessModel" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModel {
    BedrockagentcoreHarnessModelBedrockModelConfig BedrockModelConfig = null,
    BedrockagentcoreHarnessModelGeminiModelConfig GeminiModelConfig = null,
    BedrockagentcoreHarnessModelOpenAiModelConfig OpenAiModelConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.bedrockModelConfig">BedrockModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#bedrock_model_config BedrockagentcoreHarness#bedrock_model_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.geminiModelConfig">GeminiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#gemini_model_config BedrockagentcoreHarness#gemini_model_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.openAiModelConfig">OpenAiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#open_ai_model_config BedrockagentcoreHarness#open_ai_model_config}. |

---

##### `BedrockModelConfig`<sup>Optional</sup> <a name="BedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.bedrockModelConfig"></a>

```csharp
public BedrockagentcoreHarnessModelBedrockModelConfig BedrockModelConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#bedrock_model_config BedrockagentcoreHarness#bedrock_model_config}.

---

##### `GeminiModelConfig`<sup>Optional</sup> <a name="GeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.geminiModelConfig"></a>

```csharp
public BedrockagentcoreHarnessModelGeminiModelConfig GeminiModelConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#gemini_model_config BedrockagentcoreHarness#gemini_model_config}.

---

##### `OpenAiModelConfig`<sup>Optional</sup> <a name="OpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.openAiModelConfig"></a>

```csharp
public BedrockagentcoreHarnessModelOpenAiModelConfig OpenAiModelConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#open_ai_model_config BedrockagentcoreHarness#open_ai_model_config}.

---

### BedrockagentcoreHarnessModelBedrockModelConfig <a name="BedrockagentcoreHarnessModelBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModelBedrockModelConfig {
    double MaxTokens = null,
    string ModelId = null,
    double Temperature = null,
    double TopP = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.maxTokens">MaxTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.temperature">Temperature</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.topP">TopP</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.maxTokens"></a>

```csharp
public double MaxTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.topP"></a>

```csharp
public double TopP { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessModelGeminiModelConfig <a name="BedrockagentcoreHarnessModelGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModelGeminiModelConfig {
    string ApiKeyArn = null,
    double MaxTokens = null,
    string ModelId = null,
    double Temperature = null,
    double TopK = null,
    double TopP = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.apiKeyArn">ApiKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.maxTokens">MaxTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.temperature">Temperature</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topK">TopK</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topP">TopP</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `ApiKeyArn`<sup>Optional</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.apiKeyArn"></a>

```csharp
public string ApiKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}.

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.maxTokens"></a>

```csharp
public double MaxTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topK"></a>

```csharp
public double TopK { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topP"></a>

```csharp
public double TopP { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessModelOpenAiModelConfig <a name="BedrockagentcoreHarnessModelOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModelOpenAiModelConfig {
    string ApiKeyArn = null,
    double MaxTokens = null,
    string ModelId = null,
    double Temperature = null,
    double TopP = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.apiKeyArn">ApiKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.maxTokens">MaxTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.temperature">Temperature</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.topP">TopP</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `ApiKeyArn`<sup>Optional</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.apiKeyArn"></a>

```csharp
public string ApiKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}.

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.maxTokens"></a>

```csharp
public double MaxTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.topP"></a>

```csharp
public double TopP { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessSkills <a name="BedrockagentcoreHarnessSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessSkills {
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.property.path">Path</a></code> | <code>string</code> | The filesystem path to the skill definition. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The filesystem path to the skill definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#path BedrockagentcoreHarness#path}

---

### BedrockagentcoreHarnessSystemPrompt <a name="BedrockagentcoreHarnessSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessSystemPrompt {
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.property.text">Text</a></code> | <code>string</code> | The text content of the system prompt block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The text content of the system prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#text BedrockagentcoreHarness#text}

---

### BedrockagentcoreHarnessTags <a name="BedrockagentcoreHarnessTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#key BedrockagentcoreHarness#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#value BedrockagentcoreHarness#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#key BedrockagentcoreHarness#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#value BedrockagentcoreHarness#value}.

---

### BedrockagentcoreHarnessTools <a name="BedrockagentcoreHarnessTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTools {
    BedrockagentcoreHarnessToolsConfig Config = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#name BedrockagentcoreHarness#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#type BedrockagentcoreHarness#type}. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.config"></a>

```csharp
public BedrockagentcoreHarnessToolsConfig Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#name BedrockagentcoreHarness#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#type BedrockagentcoreHarness#type}.

---

### BedrockagentcoreHarnessToolsConfig <a name="BedrockagentcoreHarnessToolsConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfig {
    BedrockagentcoreHarnessToolsConfigAgentCoreBrowser AgentCoreBrowser = null,
    BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter AgentCoreCodeInterpreter = null,
    BedrockagentcoreHarnessToolsConfigAgentCoreGateway AgentCoreGateway = null,
    BedrockagentcoreHarnessToolsConfigInlineFunction InlineFunction = null,
    BedrockagentcoreHarnessToolsConfigRemoteMcp RemoteMcp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreBrowser">AgentCoreBrowser</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_browser BedrockagentcoreHarness#agent_core_browser}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreCodeInterpreter">AgentCoreCodeInterpreter</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_code_interpreter BedrockagentcoreHarness#agent_core_code_interpreter}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreGateway">AgentCoreGateway</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_gateway BedrockagentcoreHarness#agent_core_gateway}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.inlineFunction">InlineFunction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inline_function BedrockagentcoreHarness#inline_function}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.remoteMcp">RemoteMcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#remote_mcp BedrockagentcoreHarness#remote_mcp}. |

---

##### `AgentCoreBrowser`<sup>Optional</sup> <a name="AgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreBrowser"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreBrowser AgentCoreBrowser { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_browser BedrockagentcoreHarness#agent_core_browser}.

---

##### `AgentCoreCodeInterpreter`<sup>Optional</sup> <a name="AgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreCodeInterpreter"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter AgentCoreCodeInterpreter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_code_interpreter BedrockagentcoreHarness#agent_core_code_interpreter}.

---

##### `AgentCoreGateway`<sup>Optional</sup> <a name="AgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreGateway"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreGateway AgentCoreGateway { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#agent_core_gateway BedrockagentcoreHarness#agent_core_gateway}.

---

##### `InlineFunction`<sup>Optional</sup> <a name="InlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.inlineFunction"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigInlineFunction InlineFunction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#inline_function BedrockagentcoreHarness#inline_function}.

---

##### `RemoteMcp`<sup>Optional</sup> <a name="RemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.remoteMcp"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigRemoteMcp RemoteMcp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#remote_mcp BedrockagentcoreHarness#remote_mcp}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreBrowser <a name="BedrockagentcoreHarnessToolsConfigAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreBrowser {
    string BrowserArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.property.browserArn">BrowserArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#browser_arn BedrockagentcoreHarness#browser_arn}. |

---

##### `BrowserArn`<sup>Optional</sup> <a name="BrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.property.browserArn"></a>

```csharp
public string BrowserArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#browser_arn BedrockagentcoreHarness#browser_arn}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter <a name="BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter {
    string CodeInterpreterArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn BedrockagentcoreHarness#code_interpreter_arn}. |

---

##### `CodeInterpreterArn`<sup>Optional</sup> <a name="CodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.property.codeInterpreterArn"></a>

```csharp
public string CodeInterpreterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn BedrockagentcoreHarness#code_interpreter_arn}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGateway <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreGateway {
    string GatewayArn = null,
    BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth OutboundAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#gateway_arn BedrockagentcoreHarness#gateway_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.outboundAuth">OutboundAuth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#outbound_auth BedrockagentcoreHarness#outbound_auth}. |

---

##### `GatewayArn`<sup>Optional</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#gateway_arn BedrockagentcoreHarness#gateway_arn}.

---

##### `OutboundAuth`<sup>Optional</sup> <a name="OutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.outboundAuth"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth OutboundAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#outbound_auth BedrockagentcoreHarness#outbound_auth}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth {
    string AwsIam = null,
    string None = null,
    BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth Oauth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.awsIam">AwsIam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#aws_iam BedrockagentcoreHarness#aws_iam}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.none">None</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#none BedrockagentcoreHarness#none}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#oauth BedrockagentcoreHarness#oauth}. |

---

##### `AwsIam`<sup>Optional</sup> <a name="AwsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.awsIam"></a>

```csharp
public string AwsIam { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#aws_iam BedrockagentcoreHarness#aws_iam}.

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.none"></a>

```csharp
public string None { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#none BedrockagentcoreHarness#none}.

---

##### `Oauth`<sup>Optional</sup> <a name="Oauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.oauth"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth Oauth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#oauth BedrockagentcoreHarness#oauth}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth {
    System.Collections.Generic.IDictionary<string, string> CustomParameters = null,
    string DefaultReturnUrl = null,
    string GrantType = null,
    string ProviderArn = null,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.customParameters">CustomParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_parameters BedrockagentcoreHarness#custom_parameters}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.defaultReturnUrl">DefaultReturnUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#default_return_url BedrockagentcoreHarness#default_return_url}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.grantType">GrantType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#grant_type BedrockagentcoreHarness#grant_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.providerArn">ProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#provider_arn BedrockagentcoreHarness#provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#scopes BedrockagentcoreHarness#scopes}. |

---

##### `CustomParameters`<sup>Optional</sup> <a name="CustomParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.customParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#custom_parameters BedrockagentcoreHarness#custom_parameters}.

---

##### `DefaultReturnUrl`<sup>Optional</sup> <a name="DefaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.defaultReturnUrl"></a>

```csharp
public string DefaultReturnUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#default_return_url BedrockagentcoreHarness#default_return_url}.

---

##### `GrantType`<sup>Optional</sup> <a name="GrantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.grantType"></a>

```csharp
public string GrantType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#grant_type BedrockagentcoreHarness#grant_type}.

---

##### `ProviderArn`<sup>Optional</sup> <a name="ProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.providerArn"></a>

```csharp
public string ProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#provider_arn BedrockagentcoreHarness#provider_arn}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#scopes BedrockagentcoreHarness#scopes}.

---

### BedrockagentcoreHarnessToolsConfigInlineFunction <a name="BedrockagentcoreHarnessToolsConfigInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigInlineFunction {
    string Description = null,
    string InputSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#description BedrockagentcoreHarness#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.inputSchema">InputSchema</a></code> | <code>string</code> | JSON Schema describing the tool's input parameters. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#description BedrockagentcoreHarness#description}.

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.inputSchema"></a>

```csharp
public string InputSchema { get; set; }
```

- *Type:* string

JSON Schema describing the tool's input parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#input_schema BedrockagentcoreHarness#input_schema}

---

### BedrockagentcoreHarnessToolsConfigRemoteMcp <a name="BedrockagentcoreHarnessToolsConfigRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigRemoteMcp {
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#headers BedrockagentcoreHarness#headers}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#url BedrockagentcoreHarness#url}. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#headers BedrockagentcoreHarness#headers}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#url BedrockagentcoreHarness#url}.

---

### BedrockagentcoreHarnessTruncation <a name="BedrockagentcoreHarnessTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncation {
    BedrockagentcoreHarnessTruncationConfig Config = null,
    string Strategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.strategy">Strategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#strategy BedrockagentcoreHarness#strategy}. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.config"></a>

```csharp
public BedrockagentcoreHarnessTruncationConfig Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.strategy"></a>

```csharp
public string Strategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#strategy BedrockagentcoreHarness#strategy}.

---

### BedrockagentcoreHarnessTruncationConfig <a name="BedrockagentcoreHarnessTruncationConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncationConfig {
    BedrockagentcoreHarnessTruncationConfigSlidingWindow SlidingWindow = null,
    BedrockagentcoreHarnessTruncationConfigSummarization Summarization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.slidingWindow">SlidingWindow</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#sliding_window BedrockagentcoreHarness#sliding_window}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.summarization">Summarization</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summarization BedrockagentcoreHarness#summarization}. |

---

##### `SlidingWindow`<sup>Optional</sup> <a name="SlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.slidingWindow"></a>

```csharp
public BedrockagentcoreHarnessTruncationConfigSlidingWindow SlidingWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#sliding_window BedrockagentcoreHarness#sliding_window}.

---

##### `Summarization`<sup>Optional</sup> <a name="Summarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.summarization"></a>

```csharp
public BedrockagentcoreHarnessTruncationConfigSummarization Summarization { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summarization BedrockagentcoreHarness#summarization}.

---

### BedrockagentcoreHarnessTruncationConfigSlidingWindow <a name="BedrockagentcoreHarnessTruncationConfigSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncationConfigSlidingWindow {
    double MessagesCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.property.messagesCount">MessagesCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}. |

---

##### `MessagesCount`<sup>Optional</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.property.messagesCount"></a>

```csharp
public double MessagesCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}.

---

### BedrockagentcoreHarnessTruncationConfigSummarization <a name="BedrockagentcoreHarnessTruncationConfigSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncationConfigSummarization {
    double PreserveRecentMessages = null,
    string SummarizationSystemPrompt = null,
    double SummaryRatio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.preserveRecentMessages">PreserveRecentMessages</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages BedrockagentcoreHarness#preserve_recent_messages}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summarizationSystemPrompt">SummarizationSystemPrompt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt BedrockagentcoreHarness#summarization_system_prompt}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summaryRatio">SummaryRatio</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summary_ratio BedrockagentcoreHarness#summary_ratio}. |

---

##### `PreserveRecentMessages`<sup>Optional</sup> <a name="PreserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.preserveRecentMessages"></a>

```csharp
public double PreserveRecentMessages { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages BedrockagentcoreHarness#preserve_recent_messages}.

---

##### `SummarizationSystemPrompt`<sup>Optional</sup> <a name="SummarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summarizationSystemPrompt"></a>

```csharp
public string SummarizationSystemPrompt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt BedrockagentcoreHarness#summarization_system_prompt}.

---

##### `SummaryRatio`<sup>Optional</sup> <a name="SummaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summaryRatio"></a>

```csharp
public double SummaryRatio { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_harness#summary_ratio BedrockagentcoreHarness#summary_ratio}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">ResetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">ResetMatchValueStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValueString` <a name="ResetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```csharp
private void ResetMatchValueString()
```

##### `ResetMatchValueStringList` <a name="ResetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```csharp
private void ResetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">MatchValueStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">MatchValueStringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchValueStringInput`<sup>Optional</sup> <a name="MatchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```csharp
public string MatchValueStringInput { get; }
```

- *Type:* string

---

##### `MatchValueStringListInput`<sup>Optional</sup> <a name="MatchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```csharp
public string[] MatchValueStringListInput { get; }
```

- *Type:* string[]

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```csharp
public string MatchValueString { get; }
```

- *Type:* string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```csharp
public string[] MatchValueStringList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">PutClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">ResetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">ResetClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaimMatchValue` <a name="PutClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```csharp
private void PutClaimMatchValue(BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `ResetClaimMatchOperator` <a name="ResetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```csharp
private void ResetClaimMatchOperator()
```

##### `ResetClaimMatchValue` <a name="ResetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```csharp
private void ResetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">ClaimMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">ClaimMatchValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference ClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `ClaimMatchOperatorInput`<sup>Optional</sup> <a name="ClaimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```csharp
public string ClaimMatchOperatorInput { get; }
```

- *Type:* string

---

##### `ClaimMatchValueInput`<sup>Optional</sup> <a name="ClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue ClaimMatchValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```csharp
public string ClaimMatchOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```csharp
private BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">PutAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">ResetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">ResetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">ResetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizingClaimMatchValue` <a name="PutAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```csharp
private void PutAuthorizingClaimMatchValue(BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `ResetAuthorizingClaimMatchValue` <a name="ResetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```csharp
private void ResetAuthorizingClaimMatchValue()
```

##### `ResetInboundTokenClaimName` <a name="ResetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```csharp
private void ResetInboundTokenClaimName()
```

##### `ResetInboundTokenClaimValueType` <a name="ResetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```csharp
private void ResetInboundTokenClaimValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">AuthorizingClaimMatchValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">InboundTokenClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">InboundTokenClaimValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference AuthorizingClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `AuthorizingClaimMatchValueInput`<sup>Optional</sup> <a name="AuthorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue AuthorizingClaimMatchValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `InboundTokenClaimNameInput`<sup>Optional</sup> <a name="InboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```csharp
public string InboundTokenClaimNameInput { get; }
```

- *Type:* string

---

##### `InboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="InboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```csharp
public string InboundTokenClaimValueTypeInput { get; }
```

- *Type:* string

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```csharp
public string InboundTokenClaimName { get; }
```

- *Type:* string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```csharp
public string InboundTokenClaimValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">PutCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">ResetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">ResetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">ResetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">ResetDiscoveryUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomClaims` <a name="PutCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```csharp
private void PutCustomClaims(IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `ResetAllowedAudience` <a name="ResetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```csharp
private void ResetAllowedAudience()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```csharp
private void ResetAllowedClients()
```

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```csharp
private void ResetAllowedScopes()
```

##### `ResetCustomClaims` <a name="ResetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```csharp
private void ResetCustomClaims()
```

##### `ResetDiscoveryUrl` <a name="ResetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```csharp
private void ResetDiscoveryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">CustomClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">AllowedAudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">CustomClaimsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomClaims`<sup>Required</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList CustomClaims { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `AllowedAudienceInput`<sup>Optional</sup> <a name="AllowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```csharp
public string[] AllowedAudienceInput { get; }
```

- *Type:* string[]

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```csharp
public string[] AllowedClientsInput { get; }
```

- *Type:* string[]

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```csharp
public string[] AllowedScopesInput { get; }
```

- *Type:* string[]

---

##### `CustomClaimsInput`<sup>Optional</sup> <a name="CustomClaimsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] CustomClaimsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```csharp
public string DiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```csharp
public string[] AllowedAudience { get; }
```

- *Type:* string[]

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; }
```

- *Type:* string[]

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; }
```

- *Type:* string[]

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreHarnessAuthorizerConfigurationOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessAuthorizerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">PutCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">ResetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomJwtAuthorizer` <a name="PutCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```csharp
private void PutCustomJwtAuthorizer(BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `ResetCustomJwtAuthorizer` <a name="ResetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```csharp
private void ResetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">CustomJwtAuthorizerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```csharp
public BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference CustomJwtAuthorizer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `CustomJwtAuthorizerInput`<sup>Optional</sup> <a name="CustomJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer CustomJwtAuthorizerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessAuthorizerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get"></a>

```csharp
private BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage">PutSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resetSessionStorage">ResetSessionStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionStorage` <a name="PutSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage"></a>

```csharp
private void PutSessionStorage(BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---

##### `ResetSessionStorage` <a name="ResetSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resetSessionStorage"></a>

```csharp
private void ResetSessionStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage">SessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorageInput">SessionStorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionStorage`<sup>Required</sup> <a name="SessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference SessionStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a>

---

##### `SessionStorageInput`<sup>Optional</sup> <a name="SessionStorageInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorageInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage SessionStorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout">ResetIdleRuntimeSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetMaxLifetime">ResetMaxLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleRuntimeSessionTimeout` <a name="ResetIdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout"></a>

```csharp
private void ResetIdleRuntimeSessionTimeout()
```

##### `ResetMaxLifetime` <a name="ResetMaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```csharp
private void ResetMaxLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput">IdleRuntimeSessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetimeInput">MaxLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">IdleRuntimeSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime">MaxLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleRuntimeSessionTimeoutInput`<sup>Optional</sup> <a name="IdleRuntimeSessionTimeoutInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput"></a>

```csharp
public double IdleRuntimeSessionTimeoutInput { get; }
```

- *Type:* double

---

##### `MaxLifetimeInput`<sup>Optional</sup> <a name="MaxLifetimeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```csharp
public double MaxLifetimeInput { get; }
```

- *Type:* double

---

##### `IdleRuntimeSessionTimeout`<sup>Required</sup> <a name="IdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```csharp
public double IdleRuntimeSessionTimeout { get; }
```

- *Type:* double

---

##### `MaxLifetime`<sup>Required</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```csharp
public double MaxLifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig">PutNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkModeConfig">ResetNetworkModeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkModeConfig` <a name="PutNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```csharp
private void PutNetworkModeConfig(BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkMode"></a>

```csharp
private void ResetNetworkMode()
```

##### `ResetNetworkModeConfig` <a name="ResetNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```csharp
private void ResetNetworkModeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfigInput">NetworkModeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkModeConfig`<sup>Required</sup> <a name="NetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference NetworkModeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a>

---

##### `NetworkModeConfigInput`<sup>Optional</sup> <a name="NetworkModeConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig NetworkModeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeInput"></a>

```csharp
public string NetworkModeInput { get; }
```

- *Type:* string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations">PutFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetFilesystemConfigurations">ResetFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilesystemConfigurations` <a name="PutFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations"></a>

```csharp
private void PutFilesystemConfigurations(IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration"></a>

```csharp
private void PutLifecycleConfiguration(BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---

##### `ResetFilesystemConfigurations` <a name="ResetFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetFilesystemConfigurations"></a>

```csharp
private void ResetFilesystemConfigurations()
```

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetLifecycleConfiguration"></a>

```csharp
private void ResetLifecycleConfiguration()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn">AgentRuntimeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName">AgentRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations">FilesystemConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurationsInput">FilesystemConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentRuntimeArn`<sup>Required</sup> <a name="AgentRuntimeArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn"></a>

```csharp
public string AgentRuntimeArn { get; }
```

- *Type:* string

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId"></a>

```csharp
public string AgentRuntimeId { get; }
```

- *Type:* string

---

##### `AgentRuntimeName`<sup>Required</sup> <a name="AgentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName"></a>

```csharp
public string AgentRuntimeName { get; }
```

- *Type:* string

---

##### `FilesystemConfigurations`<sup>Required</sup> <a name="FilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList FilesystemConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference LifecycleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a>

---

##### `FilesystemConfigurationsInput`<sup>Optional</sup> <a name="FilesystemConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurationsInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations[] FilesystemConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>[]

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration LifecycleConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---


### BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resetContainerUri">ResetContainerUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerUri` <a name="ResetContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resetContainerUri"></a>

```csharp
private void ResetContainerUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUriInput">ContainerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri">ContainerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerUriInput`<sup>Optional</sup> <a name="ContainerUriInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUriInput"></a>

```csharp
public string ContainerUriInput { get; }
```

- *Type:* string

---

##### `ContainerUri`<sup>Required</sup> <a name="ContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```csharp
public string ContainerUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---


### BedrockagentcoreHarnessEnvironmentArtifactOutputReference <a name="BedrockagentcoreHarnessEnvironmentArtifactOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration">PutContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resetContainerConfiguration">ResetContainerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerConfiguration` <a name="PutContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration"></a>

```csharp
private void PutContainerConfiguration(BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---

##### `ResetContainerConfiguration` <a name="ResetContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resetContainerConfiguration"></a>

```csharp
private void ResetContainerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfigurationInput">ContainerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference ContainerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a>

---

##### `ContainerConfigurationInput`<sup>Optional</sup> <a name="ContainerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration ContainerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentArtifact InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

---


### BedrockagentcoreHarnessEnvironmentOutputReference <a name="BedrockagentcoreHarnessEnvironmentOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment">PutAgentCoreRuntimeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resetAgentCoreRuntimeEnvironment">ResetAgentCoreRuntimeEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCoreRuntimeEnvironment` <a name="PutAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment"></a>

```csharp
private void PutAgentCoreRuntimeEnvironment(BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---

##### `ResetAgentCoreRuntimeEnvironment` <a name="ResetAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resetAgentCoreRuntimeEnvironment"></a>

```csharp
private void ResetAgentCoreRuntimeEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment">AgentCoreRuntimeEnvironment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironmentInput">AgentCoreRuntimeEnvironmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCoreRuntimeEnvironment`<sup>Required</sup> <a name="AgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment"></a>

```csharp
public BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference AgentCoreRuntimeEnvironment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a>

---

##### `AgentCoreRuntimeEnvironmentInput`<sup>Optional</sup> <a name="AgentCoreRuntimeEnvironmentInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironmentInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment AgentCoreRuntimeEnvironmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessEnvironment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig">PutRetrievalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetActorId">ResetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetMessagesCount">ResetMessagesCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetRetrievalConfig">ResetRetrievalConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetrievalConfig` <a name="PutRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig"></a>

```csharp
private void PutRetrievalConfig(IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>>

---

##### `ResetActorId` <a name="ResetActorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetActorId"></a>

```csharp
private void ResetActorId()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetMessagesCount` <a name="ResetMessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetMessagesCount"></a>

```csharp
private void ResetMessagesCount()
```

##### `ResetRetrievalConfig` <a name="ResetRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetRetrievalConfig"></a>

```csharp
private void ResetRetrievalConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig">RetrievalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCountInput">MessagesCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfigInput">RetrievalConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId">ActorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount">MessagesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetrievalConfig`<sup>Required</sup> <a name="RetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig"></a>

```csharp
public BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap RetrievalConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a>

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorIdInput"></a>

```csharp
public string ActorIdInput { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `MessagesCountInput`<sup>Optional</sup> <a name="MessagesCountInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCountInput"></a>

```csharp
public double MessagesCountInput { get; }
```

- *Type:* double

---

##### `RetrievalConfigInput`<sup>Optional</sup> <a name="RetrievalConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfigInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig> RetrievalConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>>

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId"></a>

```csharp
public string ActorId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MessagesCount`<sup>Required</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount"></a>

```csharp
public double MessagesCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get"></a>

```csharp
private BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>>

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetRelevanceScore">ResetRelevanceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetStrategyId">ResetStrategyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelevanceScore` <a name="ResetRelevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetRelevanceScore"></a>

```csharp
private void ResetRelevanceScore()
```

##### `ResetStrategyId` <a name="ResetStrategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetStrategyId"></a>

```csharp
private void ResetStrategyId()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetTopK"></a>

```csharp
private void ResetTopK()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScoreInput">RelevanceScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyIdInput">StrategyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topKInput">TopKInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore">RelevanceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId">StrategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK">TopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelevanceScoreInput`<sup>Optional</sup> <a name="RelevanceScoreInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScoreInput"></a>

```csharp
public double RelevanceScoreInput { get; }
```

- *Type:* double

---

##### `StrategyIdInput`<sup>Optional</sup> <a name="StrategyIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyIdInput"></a>

```csharp
public string StrategyIdInput { get; }
```

- *Type:* string

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topKInput"></a>

```csharp
public double TopKInput { get; }
```

- *Type:* double

---

##### `RelevanceScore`<sup>Required</sup> <a name="RelevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore"></a>

```csharp
public double RelevanceScore { get; }
```

- *Type:* double

---

##### `StrategyId`<sup>Required</sup> <a name="StrategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId"></a>

```csharp
public string StrategyId { get; }
```

- *Type:* string

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK"></a>

```csharp
public double TopK { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>

---


### BedrockagentcoreHarnessMemoryOutputReference <a name="BedrockagentcoreHarnessMemoryOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessMemoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration">PutAgentCoreMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resetAgentCoreMemoryConfiguration">ResetAgentCoreMemoryConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCoreMemoryConfiguration` <a name="PutAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration"></a>

```csharp
private void PutAgentCoreMemoryConfiguration(BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---

##### `ResetAgentCoreMemoryConfiguration` <a name="ResetAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resetAgentCoreMemoryConfiguration"></a>

```csharp
private void ResetAgentCoreMemoryConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration">AgentCoreMemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfigurationInput">AgentCoreMemoryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCoreMemoryConfiguration`<sup>Required</sup> <a name="AgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration"></a>

```csharp
public BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference AgentCoreMemoryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a>

---

##### `AgentCoreMemoryConfigurationInput`<sup>Optional</sup> <a name="AgentCoreMemoryConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration AgentCoreMemoryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessMemory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

---


### BedrockagentcoreHarnessModelBedrockModelConfigOutputReference <a name="BedrockagentcoreHarnessModelBedrockModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModelBedrockModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetMaxTokens"></a>

```csharp
private void ResetMaxTokens()
```

##### `ResetModelId` <a name="ResetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetModelId"></a>

```csharp
private void ResetModelId()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTopP"></a>

```csharp
private void ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topPInput">TopPInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokensInput"></a>

```csharp
public double MaxTokensInput { get; }
```

- *Type:* double

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topPInput"></a>

```csharp
public double TopPInput { get; }
```

- *Type:* double

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModelBedrockModelConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

---


### BedrockagentcoreHarnessModelGeminiModelConfigOutputReference <a name="BedrockagentcoreHarnessModelGeminiModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModelGeminiModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetApiKeyArn">ResetApiKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeyArn` <a name="ResetApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetApiKeyArn"></a>

```csharp
private void ResetApiKeyArn()
```

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetMaxTokens"></a>

```csharp
private void ResetMaxTokens()
```

##### `ResetModelId` <a name="ResetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetModelId"></a>

```csharp
private void ResetModelId()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopK"></a>

```csharp
private void ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopP"></a>

```csharp
private void ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArnInput">ApiKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topKInput">TopKInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topPInput">TopPInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn">ApiKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK">TopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyArnInput`<sup>Optional</sup> <a name="ApiKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArnInput"></a>

```csharp
public string ApiKeyArnInput { get; }
```

- *Type:* string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokensInput"></a>

```csharp
public double MaxTokensInput { get; }
```

- *Type:* double

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topKInput"></a>

```csharp
public double TopKInput { get; }
```

- *Type:* double

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topPInput"></a>

```csharp
public double TopPInput { get; }
```

- *Type:* double

---

##### `ApiKeyArn`<sup>Required</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn"></a>

```csharp
public string ApiKeyArn { get; }
```

- *Type:* string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK"></a>

```csharp
public double TopK { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModelGeminiModelConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

---


### BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference <a name="BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetApiKeyArn">ResetApiKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeyArn` <a name="ResetApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetApiKeyArn"></a>

```csharp
private void ResetApiKeyArn()
```

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetMaxTokens"></a>

```csharp
private void ResetMaxTokens()
```

##### `ResetModelId` <a name="ResetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetModelId"></a>

```csharp
private void ResetModelId()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTopP"></a>

```csharp
private void ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArnInput">ApiKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topPInput">TopPInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn">ApiKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyArnInput`<sup>Optional</sup> <a name="ApiKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArnInput"></a>

```csharp
public string ApiKeyArnInput { get; }
```

- *Type:* string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokensInput"></a>

```csharp
public double MaxTokensInput { get; }
```

- *Type:* double

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topPInput"></a>

```csharp
public double TopPInput { get; }
```

- *Type:* double

---

##### `ApiKeyArn`<sup>Required</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn"></a>

```csharp
public string ApiKeyArn { get; }
```

- *Type:* string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModelOpenAiModelConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

---


### BedrockagentcoreHarnessModelOutputReference <a name="BedrockagentcoreHarnessModelOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig">PutBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig">PutGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig">PutOpenAiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetBedrockModelConfig">ResetBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetGeminiModelConfig">ResetGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetOpenAiModelConfig">ResetOpenAiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBedrockModelConfig` <a name="PutBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig"></a>

```csharp
private void PutBedrockModelConfig(BedrockagentcoreHarnessModelBedrockModelConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

---

##### `PutGeminiModelConfig` <a name="PutGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig"></a>

```csharp
private void PutGeminiModelConfig(BedrockagentcoreHarnessModelGeminiModelConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

---

##### `PutOpenAiModelConfig` <a name="PutOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig"></a>

```csharp
private void PutOpenAiModelConfig(BedrockagentcoreHarnessModelOpenAiModelConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

---

##### `ResetBedrockModelConfig` <a name="ResetBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetBedrockModelConfig"></a>

```csharp
private void ResetBedrockModelConfig()
```

##### `ResetGeminiModelConfig` <a name="ResetGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetGeminiModelConfig"></a>

```csharp
private void ResetGeminiModelConfig()
```

##### `ResetOpenAiModelConfig` <a name="ResetOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetOpenAiModelConfig"></a>

```csharp
private void ResetOpenAiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig">BedrockModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference">BedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig">GeminiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference">BedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig">OpenAiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfigInput">BedrockModelConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfigInput">GeminiModelConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfigInput">OpenAiModelConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BedrockModelConfig`<sup>Required</sup> <a name="BedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig"></a>

```csharp
public BedrockagentcoreHarnessModelBedrockModelConfigOutputReference BedrockModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference">BedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a>

---

##### `GeminiModelConfig`<sup>Required</sup> <a name="GeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig"></a>

```csharp
public BedrockagentcoreHarnessModelGeminiModelConfigOutputReference GeminiModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference">BedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a>

---

##### `OpenAiModelConfig`<sup>Required</sup> <a name="OpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig"></a>

```csharp
public BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference OpenAiModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a>

---

##### `BedrockModelConfigInput`<sup>Optional</sup> <a name="BedrockModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModelBedrockModelConfig BedrockModelConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

---

##### `GeminiModelConfigInput`<sup>Optional</sup> <a name="GeminiModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModelGeminiModelConfig GeminiModelConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

---

##### `OpenAiModelConfigInput`<sup>Optional</sup> <a name="OpenAiModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModelOpenAiModelConfig OpenAiModelConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessModel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

---


### BedrockagentcoreHarnessSkillsList <a name="BedrockagentcoreHarnessSkillsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessSkillsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get"></a>

```csharp
private BedrockagentcoreHarnessSkillsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSkills[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>[]

---


### BedrockagentcoreHarnessSkillsOutputReference <a name="BedrockagentcoreHarnessSkillsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessSkillsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSkills InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills">BedrockagentcoreHarnessSkills</a>

---


### BedrockagentcoreHarnessSystemPromptList <a name="BedrockagentcoreHarnessSystemPromptList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessSystemPromptList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get"></a>

```csharp
private BedrockagentcoreHarnessSystemPromptOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSystemPrompt[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>[]

---


### BedrockagentcoreHarnessSystemPromptOutputReference <a name="BedrockagentcoreHarnessSystemPromptOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessSystemPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessSystemPrompt InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt">BedrockagentcoreHarnessSystemPrompt</a>

---


### BedrockagentcoreHarnessTagsList <a name="BedrockagentcoreHarnessTagsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get"></a>

```csharp
private BedrockagentcoreHarnessTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>[]

---


### BedrockagentcoreHarnessTagsOutputReference <a name="BedrockagentcoreHarnessTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags">BedrockagentcoreHarnessTags</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resetBrowserArn">ResetBrowserArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBrowserArn` <a name="ResetBrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resetBrowserArn"></a>

```csharp
private void ResetBrowserArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArnInput">BrowserArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn">BrowserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrowserArnInput`<sup>Optional</sup> <a name="BrowserArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArnInput"></a>

```csharp
public string BrowserArnInput { get; }
```

- *Type:* string

---

##### `BrowserArn`<sup>Required</sup> <a name="BrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn"></a>

```csharp
public string BrowserArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreBrowser InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resetCodeInterpreterArn">ResetCodeInterpreterArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodeInterpreterArn` <a name="ResetCodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resetCodeInterpreterArn"></a>

```csharp
private void ResetCodeInterpreterArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArnInput">CodeInterpreterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInterpreterArnInput`<sup>Optional</sup> <a name="CodeInterpreterArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArnInput"></a>

```csharp
public string CodeInterpreterArnInput { get; }
```

- *Type:* string

---

##### `CodeInterpreterArn`<sup>Required</sup> <a name="CodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn"></a>

```csharp
public string CodeInterpreterArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetCustomParameters">ResetCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetDefaultReturnUrl">ResetDefaultReturnUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetGrantType">ResetGrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetProviderArn">ResetProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomParameters` <a name="ResetCustomParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetCustomParameters"></a>

```csharp
private void ResetCustomParameters()
```

##### `ResetDefaultReturnUrl` <a name="ResetDefaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetDefaultReturnUrl"></a>

```csharp
private void ResetDefaultReturnUrl()
```

##### `ResetGrantType` <a name="ResetGrantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetGrantType"></a>

```csharp
private void ResetGrantType()
```

##### `ResetProviderArn` <a name="ResetProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetProviderArn"></a>

```csharp
private void ResetProviderArn()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParametersInput">CustomParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrlInput">DefaultReturnUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantTypeInput">GrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArnInput">ProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters">CustomParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl">DefaultReturnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType">GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn">ProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomParametersInput`<sup>Optional</sup> <a name="CustomParametersInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultReturnUrlInput`<sup>Optional</sup> <a name="DefaultReturnUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrlInput"></a>

```csharp
public string DefaultReturnUrlInput { get; }
```

- *Type:* string

---

##### `GrantTypeInput`<sup>Optional</sup> <a name="GrantTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantTypeInput"></a>

```csharp
public string GrantTypeInput { get; }
```

- *Type:* string

---

##### `ProviderArnInput`<sup>Optional</sup> <a name="ProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArnInput"></a>

```csharp
public string ProviderArnInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `CustomParameters`<sup>Required</sup> <a name="CustomParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultReturnUrl`<sup>Required</sup> <a name="DefaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl"></a>

```csharp
public string DefaultReturnUrl { get; }
```

- *Type:* string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType"></a>

```csharp
public string GrantType { get; }
```

- *Type:* string

---

##### `ProviderArn`<sup>Required</sup> <a name="ProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn"></a>

```csharp
public string ProviderArn { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth">PutOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetAwsIam">ResetAwsIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetNone">ResetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetOauth">ResetOauth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth` <a name="PutOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth"></a>

```csharp
private void PutOauth(BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---

##### `ResetAwsIam` <a name="ResetAwsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetAwsIam"></a>

```csharp
private void ResetAwsIam()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetNone"></a>

```csharp
private void ResetNone()
```

##### `ResetOauth` <a name="ResetOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetOauth"></a>

```csharp
private void ResetOauth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIamInput">AwsIamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.noneInput">NoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauthInput">OauthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam">AwsIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oauth`<sup>Required</sup> <a name="Oauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference Oauth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a>

---

##### `AwsIamInput`<sup>Optional</sup> <a name="AwsIamInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIamInput"></a>

```csharp
public string AwsIamInput { get; }
```

- *Type:* string

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.noneInput"></a>

```csharp
public string NoneInput { get; }
```

- *Type:* string

---

##### `OauthInput`<sup>Optional</sup> <a name="OauthInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauthInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth OauthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---

##### `AwsIam`<sup>Required</sup> <a name="AwsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam"></a>

```csharp
public string AwsIam { get; }
```

- *Type:* string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth">PutOutboundAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetGatewayArn">ResetGatewayArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetOutboundAuth">ResetOutboundAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutboundAuth` <a name="PutOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth"></a>

```csharp
private void PutOutboundAuth(BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---

##### `ResetGatewayArn` <a name="ResetGatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetGatewayArn"></a>

```csharp
private void ResetGatewayArn()
```

##### `ResetOutboundAuth` <a name="ResetOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetOutboundAuth"></a>

```csharp
private void ResetOutboundAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth">OutboundAuth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuthInput">OutboundAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutboundAuth`<sup>Required</sup> <a name="OutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference OutboundAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a>

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `OutboundAuthInput`<sup>Optional</sup> <a name="OutboundAuthInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuthInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth OutboundAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreGateway InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---


### BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference <a name="BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetInputSchema">ResetInputSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetInputSchema"></a>

```csharp
private void ResetInputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchemaInput">InputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema">InputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchemaInput"></a>

```csharp
public string InputSchemaInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema"></a>

```csharp
public string InputSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigInlineFunction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

---


### BedrockagentcoreHarnessToolsConfigOutputReference <a name="BedrockagentcoreHarnessToolsConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser">PutAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter">PutAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway">PutAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction">PutInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp">PutRemoteMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreBrowser">ResetAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreCodeInterpreter">ResetAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreGateway">ResetAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetInlineFunction">ResetInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetRemoteMcp">ResetRemoteMcp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCoreBrowser` <a name="PutAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser"></a>

```csharp
private void PutAgentCoreBrowser(BedrockagentcoreHarnessToolsConfigAgentCoreBrowser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---

##### `PutAgentCoreCodeInterpreter` <a name="PutAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter"></a>

```csharp
private void PutAgentCoreCodeInterpreter(BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---

##### `PutAgentCoreGateway` <a name="PutAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway"></a>

```csharp
private void PutAgentCoreGateway(BedrockagentcoreHarnessToolsConfigAgentCoreGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---

##### `PutInlineFunction` <a name="PutInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction"></a>

```csharp
private void PutInlineFunction(BedrockagentcoreHarnessToolsConfigInlineFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

---

##### `PutRemoteMcp` <a name="PutRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp"></a>

```csharp
private void PutRemoteMcp(BedrockagentcoreHarnessToolsConfigRemoteMcp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---

##### `ResetAgentCoreBrowser` <a name="ResetAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreBrowser"></a>

```csharp
private void ResetAgentCoreBrowser()
```

##### `ResetAgentCoreCodeInterpreter` <a name="ResetAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreCodeInterpreter"></a>

```csharp
private void ResetAgentCoreCodeInterpreter()
```

##### `ResetAgentCoreGateway` <a name="ResetAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreGateway"></a>

```csharp
private void ResetAgentCoreGateway()
```

##### `ResetInlineFunction` <a name="ResetInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetInlineFunction"></a>

```csharp
private void ResetInlineFunction()
```

##### `ResetRemoteMcp` <a name="ResetRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetRemoteMcp"></a>

```csharp
private void ResetRemoteMcp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser">AgentCoreBrowser</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter">AgentCoreCodeInterpreter</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway">AgentCoreGateway</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction">InlineFunction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp">RemoteMcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowserInput">AgentCoreBrowserInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreterInput">AgentCoreCodeInterpreterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGatewayInput">AgentCoreGatewayInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunctionInput">InlineFunctionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcpInput">RemoteMcpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCoreBrowser`<sup>Required</sup> <a name="AgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference AgentCoreBrowser { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a>

---

##### `AgentCoreCodeInterpreter`<sup>Required</sup> <a name="AgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference AgentCoreCodeInterpreter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a>

---

##### `AgentCoreGateway`<sup>Required</sup> <a name="AgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference AgentCoreGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a>

---

##### `InlineFunction`<sup>Required</sup> <a name="InlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference InlineFunction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a>

---

##### `RemoteMcp`<sup>Required</sup> <a name="RemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference RemoteMcp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a>

---

##### `AgentCoreBrowserInput`<sup>Optional</sup> <a name="AgentCoreBrowserInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowserInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreBrowser AgentCoreBrowserInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---

##### `AgentCoreCodeInterpreterInput`<sup>Optional</sup> <a name="AgentCoreCodeInterpreterInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreterInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter AgentCoreCodeInterpreterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---

##### `AgentCoreGatewayInput`<sup>Optional</sup> <a name="AgentCoreGatewayInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGatewayInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigAgentCoreGateway AgentCoreGatewayInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---

##### `InlineFunctionInput`<sup>Optional</sup> <a name="InlineFunctionInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunctionInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigInlineFunction InlineFunctionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

---

##### `RemoteMcpInput`<sup>Optional</sup> <a name="RemoteMcpInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcpInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigRemoteMcp RemoteMcpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

---


### BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference <a name="BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfigRemoteMcp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---


### BedrockagentcoreHarnessToolsList <a name="BedrockagentcoreHarnessToolsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get"></a>

```csharp
private BedrockagentcoreHarnessToolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTools[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>[]

---


### BedrockagentcoreHarnessToolsOutputReference <a name="BedrockagentcoreHarnessToolsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig"></a>

```csharp
private void PutConfig(BedrockagentcoreHarnessToolsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference">BedrockagentcoreHarnessToolsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.config"></a>

```csharp
public BedrockagentcoreHarnessToolsConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference">BedrockagentcoreHarnessToolsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.configInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessToolsConfig ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTools InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools">BedrockagentcoreHarnessTools</a>

---


### BedrockagentcoreHarnessTruncationConfigOutputReference <a name="BedrockagentcoreHarnessTruncationConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow">PutSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization">PutSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSlidingWindow">ResetSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSummarization">ResetSummarization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlidingWindow` <a name="PutSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow"></a>

```csharp
private void PutSlidingWindow(BedrockagentcoreHarnessTruncationConfigSlidingWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---

##### `PutSummarization` <a name="PutSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization"></a>

```csharp
private void PutSummarization(BedrockagentcoreHarnessTruncationConfigSummarization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

---

##### `ResetSlidingWindow` <a name="ResetSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSlidingWindow"></a>

```csharp
private void ResetSlidingWindow()
```

##### `ResetSummarization` <a name="ResetSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSummarization"></a>

```csharp
private void ResetSummarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow">SlidingWindow</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization">Summarization</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindowInput">SlidingWindowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarizationInput">SummarizationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SlidingWindow`<sup>Required</sup> <a name="SlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow"></a>

```csharp
public BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference SlidingWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a>

---

##### `Summarization`<sup>Required</sup> <a name="Summarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization"></a>

```csharp
public BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference Summarization { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a>

---

##### `SlidingWindowInput`<sup>Optional</sup> <a name="SlidingWindowInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindowInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncationConfigSlidingWindow SlidingWindowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---

##### `SummarizationInput`<sup>Optional</sup> <a name="SummarizationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarizationInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncationConfigSummarization SummarizationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

---


### BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference <a name="BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resetMessagesCount">ResetMessagesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessagesCount` <a name="ResetMessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resetMessagesCount"></a>

```csharp
private void ResetMessagesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCountInput">MessagesCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount">MessagesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessagesCountInput`<sup>Optional</sup> <a name="MessagesCountInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCountInput"></a>

```csharp
public double MessagesCountInput { get; }
```

- *Type:* double

---

##### `MessagesCount`<sup>Required</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount"></a>

```csharp
public double MessagesCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncationConfigSlidingWindow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---


### BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference <a name="BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetPreserveRecentMessages">ResetPreserveRecentMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummarizationSystemPrompt">ResetSummarizationSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummaryRatio">ResetSummaryRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveRecentMessages` <a name="ResetPreserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetPreserveRecentMessages"></a>

```csharp
private void ResetPreserveRecentMessages()
```

##### `ResetSummarizationSystemPrompt` <a name="ResetSummarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummarizationSystemPrompt"></a>

```csharp
private void ResetSummarizationSystemPrompt()
```

##### `ResetSummaryRatio` <a name="ResetSummaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummaryRatio"></a>

```csharp
private void ResetSummaryRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessagesInput">PreserveRecentMessagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPromptInput">SummarizationSystemPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatioInput">SummaryRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages">PreserveRecentMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt">SummarizationSystemPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio">SummaryRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreserveRecentMessagesInput`<sup>Optional</sup> <a name="PreserveRecentMessagesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessagesInput"></a>

```csharp
public double PreserveRecentMessagesInput { get; }
```

- *Type:* double

---

##### `SummarizationSystemPromptInput`<sup>Optional</sup> <a name="SummarizationSystemPromptInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPromptInput"></a>

```csharp
public string SummarizationSystemPromptInput { get; }
```

- *Type:* string

---

##### `SummaryRatioInput`<sup>Optional</sup> <a name="SummaryRatioInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatioInput"></a>

```csharp
public double SummaryRatioInput { get; }
```

- *Type:* double

---

##### `PreserveRecentMessages`<sup>Required</sup> <a name="PreserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages"></a>

```csharp
public double PreserveRecentMessages { get; }
```

- *Type:* double

---

##### `SummarizationSystemPrompt`<sup>Required</sup> <a name="SummarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt"></a>

```csharp
public string SummarizationSystemPrompt { get; }
```

- *Type:* string

---

##### `SummaryRatio`<sup>Required</sup> <a name="SummaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio"></a>

```csharp
public double SummaryRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncationConfigSummarization InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

---


### BedrockagentcoreHarnessTruncationOutputReference <a name="BedrockagentcoreHarnessTruncationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreHarnessTruncationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig"></a>

```csharp
private void PutConfig(BedrockagentcoreHarnessTruncationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetStrategy"></a>

```csharp
private void ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference">BedrockagentcoreHarnessTruncationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategyInput">StrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.config"></a>

```csharp
public BedrockagentcoreHarnessTruncationConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference">BedrockagentcoreHarnessTruncationConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.configInput"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncationConfig ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategyInput"></a>

```csharp
public string StrategyInput { get; }
```

- *Type:* string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreHarnessTruncation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

---



