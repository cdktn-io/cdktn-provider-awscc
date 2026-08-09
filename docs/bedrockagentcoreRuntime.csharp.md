# `bedrockagentcoreRuntime` Submodule <a name="`bedrockagentcoreRuntime` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreRuntime <a name="BedrockagentcoreRuntime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntime(Construct Scope, string Id, BedrockagentcoreRuntimeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig">BedrockagentcoreRuntimeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig">BedrockagentcoreRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAgentRuntimeArtifact">PutAgentRuntimeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAuthorizerConfiguration">PutAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putFilesystemConfigurations">PutFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putRequestHeaderConfiguration">PutRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetAuthorizerConfiguration">ResetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetFilesystemConfigurations">ResetFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetProtocolConfiguration">ResetProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetRequestHeaderConfiguration">ResetRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentRuntimeArtifact` <a name="PutAgentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAgentRuntimeArtifact"></a>

```csharp
private void PutAgentRuntimeArtifact(BedrockagentcoreRuntimeAgentRuntimeArtifact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAgentRuntimeArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

---

##### `PutAuthorizerConfiguration` <a name="PutAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAuthorizerConfiguration"></a>

```csharp
private void PutAuthorizerConfiguration(BedrockagentcoreRuntimeAuthorizerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

---

##### `PutFilesystemConfigurations` <a name="PutFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putFilesystemConfigurations"></a>

```csharp
private void PutFilesystemConfigurations(IResolvable|BedrockagentcoreRuntimeFilesystemConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putFilesystemConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>[]

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putLifecycleConfiguration"></a>

```csharp
private void PutLifecycleConfiguration(BedrockagentcoreRuntimeLifecycleConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(BedrockagentcoreRuntimeNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

---

##### `PutRequestHeaderConfiguration` <a name="PutRequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putRequestHeaderConfiguration"></a>

```csharp
private void PutRequestHeaderConfiguration(BedrockagentcoreRuntimeRequestHeaderConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.putRequestHeaderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

---

##### `ResetAuthorizerConfiguration` <a name="ResetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetAuthorizerConfiguration"></a>

```csharp
private void ResetAuthorizerConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetFilesystemConfigurations` <a name="ResetFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetFilesystemConfigurations"></a>

```csharp
private void ResetFilesystemConfigurations()
```

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetLifecycleConfiguration"></a>

```csharp
private void ResetLifecycleConfiguration()
```

##### `ResetProtocolConfiguration` <a name="ResetProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetProtocolConfiguration"></a>

```csharp
private void ResetProtocolConfiguration()
```

##### `ResetRequestHeaderConfiguration` <a name="ResetRequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetRequestHeaderConfiguration"></a>

```csharp
private void ResetRequestHeaderConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreRuntime.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreRuntime.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreRuntime.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreRuntime.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreRuntime resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreRuntime to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArn">AgentRuntimeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifact">AgentRuntimeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeVersion">AgentRuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurations">FilesystemConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList">BedrockagentcoreRuntimeFilesystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference">BedrockagentcoreRuntimeLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference">BedrockagentcoreRuntimeNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfiguration">RequestHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference">BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.workloadIdentityDetails">WorkloadIdentityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference">BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifactInput">AgentRuntimeArtifactInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeNameInput">AgentRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfigurationInput">AuthorizerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurationsInput">FilesystemConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfigurationInput">ProtocolConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfigurationInput">RequestHeaderConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeName">AgentRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentRuntimeArn`<sup>Required</sup> <a name="AgentRuntimeArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArn"></a>

```csharp
public string AgentRuntimeArn { get; }
```

- *Type:* string

---

##### `AgentRuntimeArtifact`<sup>Required</sup> <a name="AgentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifact"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference AgentRuntimeArtifact { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference</a>

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeId"></a>

```csharp
public string AgentRuntimeId { get; }
```

- *Type:* string

---

##### `AgentRuntimeVersion`<sup>Required</sup> <a name="AgentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeVersion"></a>

```csharp
public string AgentRuntimeVersion { get; }
```

- *Type:* string

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference AuthorizerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `FilesystemConfigurations`<sup>Required</sup> <a name="FilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurations"></a>

```csharp
public BedrockagentcoreRuntimeFilesystemConfigurationsList FilesystemConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList">BedrockagentcoreRuntimeFilesystemConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeLifecycleConfigurationOutputReference LifecycleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference">BedrockagentcoreRuntimeLifecycleConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference">BedrockagentcoreRuntimeNetworkConfigurationOutputReference</a>

---

##### `RequestHeaderConfiguration`<sup>Required</sup> <a name="RequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference RequestHeaderConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference">BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `WorkloadIdentityDetails`<sup>Required</sup> <a name="WorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.workloadIdentityDetails"></a>

```csharp
public BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference WorkloadIdentityDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference">BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference</a>

---

##### `AgentRuntimeArtifactInput`<sup>Optional</sup> <a name="AgentRuntimeArtifactInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeArtifactInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifact AgentRuntimeArtifactInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

---

##### `AgentRuntimeNameInput`<sup>Optional</sup> <a name="AgentRuntimeNameInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeNameInput"></a>

```csharp
public string AgentRuntimeNameInput { get; }
```

- *Type:* string

---

##### `AuthorizerConfigurationInput`<sup>Optional</sup> <a name="AuthorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.authorizerConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfiguration AuthorizerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FilesystemConfigurationsInput`<sup>Optional</sup> <a name="FilesystemConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.filesystemConfigurationsInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurations[] FilesystemConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>[]

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.lifecycleConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeLifecycleConfiguration LifecycleConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.networkConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

---

##### `ProtocolConfigurationInput`<sup>Optional</sup> <a name="ProtocolConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfigurationInput"></a>

```csharp
public string ProtocolConfigurationInput { get; }
```

- *Type:* string

---

##### `RequestHeaderConfigurationInput`<sup>Optional</sup> <a name="RequestHeaderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.requestHeaderConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeRequestHeaderConfiguration RequestHeaderConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AgentRuntimeName`<sup>Required</sup> <a name="AgentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.agentRuntimeName"></a>

```csharp
public string AgentRuntimeName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.protocolConfiguration"></a>

```csharp
public string ProtocolConfiguration { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntime.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreRuntimeAgentRuntimeArtifact <a name="BedrockagentcoreRuntimeAgentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifact {
    BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration CodeConfiguration = null,
    BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration ContainerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a></code> | Representation of a code configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#container_configuration BedrockagentcoreRuntime#container_configuration}. |

---

##### `CodeConfiguration`<sup>Optional</sup> <a name="CodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.codeConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration CodeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

Representation of a code configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#code_configuration BedrockagentcoreRuntime#code_configuration}

---

##### `ContainerConfiguration`<sup>Optional</sup> <a name="ContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact.property.containerConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration ContainerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#container_configuration BedrockagentcoreRuntime#container_configuration}.

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration {
    BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode Code = null,
    string[] EntryPoint = null,
    string Runtime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a></code> | Object represents source code from zip file. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | List of entry points. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.runtime">Runtime</a></code> | <code>string</code> | Managed runtime types. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.code"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode Code { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

Object represents source code from zip file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#code BedrockagentcoreRuntime#code}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; set; }
```

- *Type:* string[]

List of entry points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#entry_point BedrockagentcoreRuntime#entry_point}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Managed runtime types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#runtime BedrockagentcoreRuntime#runtime}

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode {
    BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a></code> | S3 Location Configuration. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode.property.s3"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

S3 Location Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#s3 BedrockagentcoreRuntime#s3}

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 {
    string Bucket = null,
    string Prefix = null,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.bucket">Bucket</a></code> | <code>string</code> | S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.prefix">Prefix</a></code> | <code>string</code> | S3 object key prefix. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.versionId">VersionId</a></code> | <code>string</code> | S3 object version ID. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#bucket BedrockagentcoreRuntime#bucket}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

S3 object key prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#prefix BedrockagentcoreRuntime#prefix}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

S3 object version ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#version_id BedrockagentcoreRuntime#version_id}

---

### BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration {
    string ContainerUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri">ContainerUri</a></code> | <code>string</code> | The ECR URI of the container. |

---

##### `ContainerUri`<sup>Optional</sup> <a name="ContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri"></a>

```csharp
public string ContainerUri { get; set; }
```

- *Type:* string

The ECR URI of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#container_uri BedrockagentcoreRuntime#container_uri}

---

### BedrockagentcoreRuntimeAuthorizerConfiguration <a name="BedrockagentcoreRuntimeAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfiguration {
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer CustomJwtAuthorizer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Configuration for custom JWT authorizer. |

---

##### `CustomJwtAuthorizer`<sup>Optional</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer CustomJwtAuthorizer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

Configuration for custom JWT authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#custom_jwt_authorizer BedrockagentcoreRuntime#custom_jwt_authorizer}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer {
    string[] AllowedAudience = null,
    string[] AllowedClients = null,
    string[] AllowedScopes = null,
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration AllowedWorkloadConfiguration = null,
    IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] CustomClaims = null,
    string DiscoveryUrl = null,
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint PrivateEndpoint = null,
    IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] PrivateEndpointOverrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">AllowedAudience</a></code> | <code>string[]</code> | List of allowed audiences. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | List of allowed clients. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | List of allowed scopes. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedWorkloadConfiguration">AllowedWorkloadConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a></code> | Allow-list of upstream workloads permitted to reach this resource via the workload identity chain. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">CustomClaims</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | List of required custom claims. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | OpenID Connect discovery URL. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverrides">PrivateEndpointOverrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]</code> | List of private endpoint overrides. |

---

##### `AllowedAudience`<sup>Optional</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```csharp
public string[] AllowedAudience { get; set; }
```

- *Type:* string[]

List of allowed audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#allowed_audience BedrockagentcoreRuntime#allowed_audience}

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; set; }
```

- *Type:* string[]

List of allowed clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#allowed_clients BedrockagentcoreRuntime#allowed_clients}

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; set; }
```

- *Type:* string[]

List of allowed scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#allowed_scopes BedrockagentcoreRuntime#allowed_scopes}

---

##### `AllowedWorkloadConfiguration`<sup>Optional</sup> <a name="AllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedWorkloadConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration AllowedWorkloadConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

Allow-list of upstream workloads permitted to reach this resource via the workload identity chain.

When set, the data plane enforces that the introspected workload chain's caller matches one of the configured hosting environments or workload identities; absent means no chain enforcement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#allowed_workload_configuration BedrockagentcoreRuntime#allowed_workload_configuration}

---

##### `CustomClaims`<sup>Optional</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] CustomClaims { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

List of required custom claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#custom_claims BedrockagentcoreRuntime#custom_claims}

---

##### `DiscoveryUrl`<sup>Optional</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; set; }
```

- *Type:* string

OpenID Connect discovery URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#discovery_url BedrockagentcoreRuntime#discovery_url}

---

##### `PrivateEndpoint`<sup>Optional</sup> <a name="PrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint PrivateEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#private_endpoint BedrockagentcoreRuntime#private_endpoint}

---

##### `PrivateEndpointOverrides`<sup>Optional</sup> <a name="PrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverrides"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] PrivateEndpointOverrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

List of private endpoint overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#private_endpoint_overrides BedrockagentcoreRuntime#private_endpoint_overrides}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration {
    IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments[] HostingEnvironments = null,
    string[] WorkloadIdentities = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.hostingEnvironments">HostingEnvironments</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>[]</code> | List of allow-listed hosting environments. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.workloadIdentities">WorkloadIdentities</a></code> | <code>string[]</code> | List of allow-listed workload identity names. |

---

##### `HostingEnvironments`<sup>Optional</sup> <a name="HostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.hostingEnvironments"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments[] HostingEnvironments { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>[]

List of allow-listed hosting environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#hosting_environments BedrockagentcoreRuntime#hosting_environments}

---

##### `WorkloadIdentities`<sup>Optional</sup> <a name="WorkloadIdentities" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.workloadIdentities"></a>

```csharp
public string[] WorkloadIdentities { get; set; }
```

- *Type:* string[]

List of allow-listed workload identity names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#workload_identities BedrockagentcoreRuntime#workload_identities}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments.property.arn">Arn</a></code> | <code>string</code> | The ARN of the bedrock-agentcore hosting environment. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the bedrock-agentcore hosting environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#arn BedrockagentcoreRuntime#arn}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue AuthorizingClaimMatchValue = null,
    string InboundTokenClaimName = null,
    string InboundTokenClaimValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | The value or values in the custom claim to match and relationship of match. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>string</code> | The name of the custom claim to validate. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>string</code> | Token claim data type. |

---

##### `AuthorizingClaimMatchValue`<sup>Optional</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue AuthorizingClaimMatchValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

The value or values in the custom claim to match and relationship of match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#authorizing_claim_match_value BedrockagentcoreRuntime#authorizing_claim_match_value}

---

##### `InboundTokenClaimName`<sup>Optional</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```csharp
public string InboundTokenClaimName { get; set; }
```

- *Type:* string

The name of the custom claim to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#inbound_token_claim_name BedrockagentcoreRuntime#inbound_token_claim_name}

---

##### `InboundTokenClaimValueType`<sup>Optional</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```csharp
public string InboundTokenClaimValueType { get; set; }
```

- *Type:* string

Token claim data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#inbound_token_claim_value_type BedrockagentcoreRuntime#inbound_token_claim_value_type}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
    string ClaimMatchOperator = null,
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue ClaimMatchValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>string</code> | The relationship between the claim field value and the value or values being matched. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | The value or values in the custom claim to match for. |

---

##### `ClaimMatchOperator`<sup>Optional</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```csharp
public string ClaimMatchOperator { get; set; }
```

- *Type:* string

The relationship between the claim field value and the value or values being matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#claim_match_operator BedrockagentcoreRuntime#claim_match_operator}

---

##### `ClaimMatchValue`<sup>Optional</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue ClaimMatchValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

The value or values in the custom claim to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#claim_match_value BedrockagentcoreRuntime#claim_match_value}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
    string MatchValueString = null,
    string[] MatchValueStringList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">MatchValueString</a></code> | <code>string</code> | The string value to match for. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">MatchValueStringList</a></code> | <code>string[]</code> | The list of strings to check for a match. |

---

##### `MatchValueString`<sup>Optional</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```csharp
public string MatchValueString { get; set; }
```

- *Type:* string

The string value to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#match_value_string BedrockagentcoreRuntime#match_value_string}

---

##### `MatchValueStringList`<sup>Optional</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```csharp
public string[] MatchValueStringList { get; set; }
```

- *Type:* string[]

The list of strings to check for a match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#match_value_string_list BedrockagentcoreRuntime#match_value_string_list}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint {
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource ManagedVpcResource = null,
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource SelfManagedLatticeResource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | Managed VPC resource configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | Self-managed VPC Lattice resource configuration. |

---

##### `ManagedVpcResource`<sup>Optional</sup> <a name="ManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource ManagedVpcResource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

Managed VPC resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#managed_vpc_resource BedrockagentcoreRuntime#managed_vpc_resource}

---

##### `SelfManagedLatticeResource`<sup>Optional</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource SelfManagedLatticeResource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

Self-managed VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#self_managed_lattice_resource BedrockagentcoreRuntime#self_managed_lattice_resource}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource {
    string EndpointIpAddressType = null,
    string RoutingDomain = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string VpcIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>string</code> | The IP address type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain">RoutingDomain</a></code> | <code>string</code> | An intermediate domain to use as the resource configuration endpoint instead of the actual target domain. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The security group IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The subnet IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags to apply to the managed VPC Lattice resource gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | The VPC identifier. |

---

##### `EndpointIpAddressType`<sup>Optional</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```csharp
public string EndpointIpAddressType { get; set; }
```

- *Type:* string

The IP address type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#endpoint_ip_address_type BedrockagentcoreRuntime#endpoint_ip_address_type}

---

##### `RoutingDomain`<sup>Optional</sup> <a name="RoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain"></a>

```csharp
public string RoutingDomain { get; set; }
```

- *Type:* string

An intermediate domain to use as the resource configuration endpoint instead of the actual target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#routing_domain BedrockagentcoreRuntime#routing_domain}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#security_group_ids BedrockagentcoreRuntime#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#subnet_ids BedrockagentcoreRuntime#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags to apply to the managed VPC Lattice resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}

---

##### `VpcIdentifier`<sup>Optional</sup> <a name="VpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; set; }
```

- *Type:* string

The VPC identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#vpc_identifier BedrockagentcoreRuntime#vpc_identifier}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides {
    string Domain = null,
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint PrivateEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.domain">Domain</a></code> | <code>string</code> | The domain to override. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a></code> | Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified. |

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#domain BedrockagentcoreRuntime#domain}

---

##### `PrivateEndpoint`<sup>Optional</sup> <a name="PrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.privateEndpoint"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint PrivateEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#private_endpoint BedrockagentcoreRuntime#private_endpoint}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint {
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource ManagedVpcResource = null,
    BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource SelfManagedLatticeResource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a></code> | Managed VPC resource configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a></code> | Self-managed VPC Lattice resource configuration. |

---

##### `ManagedVpcResource`<sup>Optional</sup> <a name="ManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.managedVpcResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource ManagedVpcResource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

Managed VPC resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#managed_vpc_resource BedrockagentcoreRuntime#managed_vpc_resource}

---

##### `SelfManagedLatticeResource`<sup>Optional</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.selfManagedLatticeResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource SelfManagedLatticeResource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

Self-managed VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#self_managed_lattice_resource BedrockagentcoreRuntime#self_managed_lattice_resource}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource {
    string EndpointIpAddressType = null,
    string RoutingDomain = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string VpcIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>string</code> | The IP address type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.routingDomain">RoutingDomain</a></code> | <code>string</code> | An intermediate domain to use as the resource configuration endpoint instead of the actual target domain. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The security group IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The subnet IDs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags to apply to the managed VPC Lattice resource gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | The VPC identifier. |

---

##### `EndpointIpAddressType`<sup>Optional</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```csharp
public string EndpointIpAddressType { get; set; }
```

- *Type:* string

The IP address type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#endpoint_ip_address_type BedrockagentcoreRuntime#endpoint_ip_address_type}

---

##### `RoutingDomain`<sup>Optional</sup> <a name="RoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.routingDomain"></a>

```csharp
public string RoutingDomain { get; set; }
```

- *Type:* string

An intermediate domain to use as the resource configuration endpoint instead of the actual target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#routing_domain BedrockagentcoreRuntime#routing_domain}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#security_group_ids BedrockagentcoreRuntime#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#subnet_ids BedrockagentcoreRuntime#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags to apply to the managed VPC Lattice resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}

---

##### `VpcIdentifier`<sup>Optional</sup> <a name="VpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; set; }
```

- *Type:* string

The VPC identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#vpc_identifier BedrockagentcoreRuntime#vpc_identifier}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource {
    string ResourceConfigurationIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>string</code> | The identifier of the VPC Lattice resource configuration. |

---

##### `ResourceConfigurationIdentifier`<sup>Optional</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```csharp
public string ResourceConfigurationIdentifier { get; set; }
```

- *Type:* string

The identifier of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#resource_configuration_identifier BedrockagentcoreRuntime#resource_configuration_identifier}

---

### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource {
    string ResourceConfigurationIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>string</code> | The identifier of the VPC Lattice resource configuration. |

---

##### `ResourceConfigurationIdentifier`<sup>Optional</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```csharp
public string ResourceConfigurationIdentifier { get; set; }
```

- *Type:* string

The identifier of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#resource_configuration_identifier BedrockagentcoreRuntime#resource_configuration_identifier}

---

### BedrockagentcoreRuntimeConfig <a name="BedrockagentcoreRuntimeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BedrockagentcoreRuntimeAgentRuntimeArtifact AgentRuntimeArtifact,
    string AgentRuntimeName,
    BedrockagentcoreRuntimeNetworkConfiguration NetworkConfiguration,
    string RoleArn,
    BedrockagentcoreRuntimeAuthorizerConfiguration AuthorizerConfiguration = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    IResolvable|BedrockagentcoreRuntimeFilesystemConfigurations[] FilesystemConfigurations = null,
    BedrockagentcoreRuntimeLifecycleConfiguration LifecycleConfiguration = null,
    string ProtocolConfiguration = null,
    BedrockagentcoreRuntimeRequestHeaderConfiguration RequestHeaderConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeArtifact">AgentRuntimeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a></code> | The artifact of the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeName">AgentRuntimeName</a></code> | <code>string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a></code> | Network access configuration for the Agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a></code> | Authorizer configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.description">Description</a></code> | <code>string</code> | Description of the resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.filesystemConfigurations">FilesystemConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>[]</code> | Filesystem configurations for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a></code> | Lifecycle configuration for managing runtime sessions. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code>string</code> | Protocol configuration for the agent runtime. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.requestHeaderConfiguration">RequestHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a></code> | Configuration for HTTP request headers. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of tag keys and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentRuntimeArtifact`<sup>Required</sup> <a name="AgentRuntimeArtifact" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeArtifact"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifact AgentRuntimeArtifact { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

The artifact of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#agent_runtime_artifact BedrockagentcoreRuntime#agent_runtime_artifact}

---

##### `AgentRuntimeName`<sup>Required</sup> <a name="AgentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.agentRuntimeName"></a>

```csharp
public string AgentRuntimeName { get; set; }
```

- *Type:* string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#agent_runtime_name BedrockagentcoreRuntime#agent_runtime_name}

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

Network access configuration for the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#network_configuration BedrockagentcoreRuntime#network_configuration}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#role_arn BedrockagentcoreRuntime#role_arn}

---

##### `AuthorizerConfiguration`<sup>Optional</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.authorizerConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfiguration AuthorizerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

Authorizer configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#authorizer_configuration BedrockagentcoreRuntime#authorizer_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#description BedrockagentcoreRuntime#description}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#environment_variables BedrockagentcoreRuntime#environment_variables}

---

##### `FilesystemConfigurations`<sup>Optional</sup> <a name="FilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.filesystemConfigurations"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurations[] FilesystemConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>[]

Filesystem configurations for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#filesystem_configurations BedrockagentcoreRuntime#filesystem_configurations}

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.lifecycleConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeLifecycleConfiguration LifecycleConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

Lifecycle configuration for managing runtime sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#lifecycle_configuration BedrockagentcoreRuntime#lifecycle_configuration}

---

##### `ProtocolConfiguration`<sup>Optional</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.protocolConfiguration"></a>

```csharp
public string ProtocolConfiguration { get; set; }
```

- *Type:* string

Protocol configuration for the agent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#protocol_configuration BedrockagentcoreRuntime#protocol_configuration}

---

##### `RequestHeaderConfiguration`<sup>Optional</sup> <a name="RequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.requestHeaderConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeRequestHeaderConfiguration RequestHeaderConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

Configuration for HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#request_header_configuration BedrockagentcoreRuntime#request_header_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}

---

### BedrockagentcoreRuntimeFilesystemConfigurations <a name="BedrockagentcoreRuntimeFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurations {
    BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint EfsAccessPoint = null,
    BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint S3FilesAccessPoint = null,
    BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage SessionStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.efsAccessPoint">EfsAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a></code> | Configuration for EFS access point filesystem. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.s3FilesAccessPoint">S3FilesAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a></code> | Configuration for S3 Files access point filesystem. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.sessionStorage">SessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a></code> | Configuration for session storage. |

---

##### `EfsAccessPoint`<sup>Optional</sup> <a name="EfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.efsAccessPoint"></a>

```csharp
public BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint EfsAccessPoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

Configuration for EFS access point filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#efs_access_point BedrockagentcoreRuntime#efs_access_point}

---

##### `S3FilesAccessPoint`<sup>Optional</sup> <a name="S3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.s3FilesAccessPoint"></a>

```csharp
public BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint S3FilesAccessPoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

Configuration for S3 Files access point filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#s3_files_access_point BedrockagentcoreRuntime#s3_files_access_point}

---

##### `SessionStorage`<sup>Optional</sup> <a name="SessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations.property.sessionStorage"></a>

```csharp
public BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage SessionStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

Configuration for session storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#session_storage BedrockagentcoreRuntime#session_storage}

---

### BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint <a name="BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint {
    string AccessPointArn = null,
    string MountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.accessPointArn">AccessPointArn</a></code> | <code>string</code> | ARN of the EFS access point. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.mountPath">MountPath</a></code> | <code>string</code> | Mount path for filesystem configuration. |

---

##### `AccessPointArn`<sup>Optional</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.accessPointArn"></a>

```csharp
public string AccessPointArn { get; set; }
```

- *Type:* string

ARN of the EFS access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#access_point_arn BedrockagentcoreRuntime#access_point_arn}

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Mount path for filesystem configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}

---

### BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint <a name="BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint {
    string AccessPointArn = null,
    string MountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.accessPointArn">AccessPointArn</a></code> | <code>string</code> | ARN of the S3 Files access point. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.mountPath">MountPath</a></code> | <code>string</code> | Mount path for filesystem configuration. |

---

##### `AccessPointArn`<sup>Optional</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.accessPointArn"></a>

```csharp
public string AccessPointArn { get; set; }
```

- *Type:* string

ARN of the S3 Files access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#access_point_arn BedrockagentcoreRuntime#access_point_arn}

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Mount path for filesystem configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}

---

### BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage <a name="BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage {
    string MountPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage.property.mountPath">MountPath</a></code> | <code>string</code> | Mount path for filesystem configuration. |

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Mount path for filesystem configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}

---

### BedrockagentcoreRuntimeLifecycleConfiguration <a name="BedrockagentcoreRuntimeLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeLifecycleConfiguration {
    double IdleRuntimeSessionTimeout = null,
    double MaxLifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout">IdleRuntimeSessionTimeout</a></code> | <code>double</code> | Timeout in seconds for idle runtime sessions. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.maxLifetime">MaxLifetime</a></code> | <code>double</code> | Maximum lifetime in seconds for runtime sessions. |

---

##### `IdleRuntimeSessionTimeout`<sup>Optional</sup> <a name="IdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout"></a>

```csharp
public double IdleRuntimeSessionTimeout { get; set; }
```

- *Type:* double

Timeout in seconds for idle runtime sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#idle_runtime_session_timeout BedrockagentcoreRuntime#idle_runtime_session_timeout}

---

##### `MaxLifetime`<sup>Optional</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration.property.maxLifetime"></a>

```csharp
public double MaxLifetime { get; set; }
```

- *Type:* double

Maximum lifetime in seconds for runtime sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#max_lifetime BedrockagentcoreRuntime#max_lifetime}

---

### BedrockagentcoreRuntimeNetworkConfiguration <a name="BedrockagentcoreRuntimeNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeNetworkConfiguration {
    string NetworkMode,
    BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig NetworkModeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>string</code> | Network mode configuration type. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a></code> | Network mode configuration for VPC. |

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkMode"></a>

```csharp
public string NetworkMode { get; set; }
```

- *Type:* string

Network mode configuration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#network_mode BedrockagentcoreRuntime#network_mode}

---

##### `NetworkModeConfig`<sup>Optional</sup> <a name="NetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration.property.networkModeConfig"></a>

```csharp
public BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig NetworkModeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#network_mode_config BedrockagentcoreRuntime#network_mode_config}

---

### BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig {
    string[] SecurityGroups = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Subnets for VPC. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#security_groups BedrockagentcoreRuntime#security_groups}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#subnets BedrockagentcoreRuntime#subnets}

---

### BedrockagentcoreRuntimeRequestHeaderConfiguration <a name="BedrockagentcoreRuntimeRequestHeaderConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeRequestHeaderConfiguration {
    string[] RequestHeaderAllowlist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist">RequestHeaderAllowlist</a></code> | <code>string[]</code> | List of allowed HTTP headers for agent runtime requests. |

---

##### `RequestHeaderAllowlist`<sup>Optional</sup> <a name="RequestHeaderAllowlist" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist"></a>

```csharp
public string[] RequestHeaderAllowlist { get; set; }
```

- *Type:* string[]

List of allowed HTTP headers for agent runtime requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_runtime#request_header_allowlist BedrockagentcoreRuntime#request_header_allowlist}

---

### BedrockagentcoreRuntimeWorkloadIdentityDetails <a name="BedrockagentcoreRuntimeWorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeWorkloadIdentityDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3"></a>

```csharp
private void PutS3(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3Input"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode">PutCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCode` <a name="PutCode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode"></a>

```csharp
private void PutCode(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

---

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetEntryPoint"></a>

```csharp
private void ResetEntryPoint()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.codeInput">CodeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.code"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference Code { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference</a>

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.codeInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode CodeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPointInput"></a>

```csharp
public string[] EntryPointInput { get; }
```

- *Type:* string[]

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; }
```

- *Type:* string[]

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resetContainerUri">ResetContainerUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerUri` <a name="ResetContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resetContainerUri"></a>

```csharp
private void ResetContainerUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput">ContainerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri">ContainerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerUriInput`<sup>Optional</sup> <a name="ContainerUriInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput"></a>

```csharp
public string ContainerUriInput { get; }
```

- *Type:* string

---

##### `ContainerUri`<sup>Required</sup> <a name="ContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```csharp
public string ContainerUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---


### BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference <a name="BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration">PutCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration">PutContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetCodeConfiguration">ResetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration">ResetContainerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfiguration` <a name="PutCodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration"></a>

```csharp
private void PutCodeConfiguration(BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

---

##### `PutContainerConfiguration` <a name="PutContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration"></a>

```csharp
private void PutContainerConfiguration(BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---

##### `ResetCodeConfiguration` <a name="ResetCodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetCodeConfiguration"></a>

```csharp
private void ResetCodeConfiguration()
```

##### `ResetContainerConfiguration` <a name="ResetContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration"></a>

```csharp
private void ResetContainerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfigurationInput">CodeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput">ContainerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeConfiguration`<sup>Required</sup> <a name="CodeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference CodeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference</a>

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference ContainerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference</a>

---

##### `CodeConfigurationInput`<sup>Optional</sup> <a name="CodeConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.codeConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration CodeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration</a>

---

##### `ContainerConfigurationInput`<sup>Optional</sup> <a name="ContainerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration ContainerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAgentRuntimeArtifact InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAgentRuntimeArtifact">BedrockagentcoreRuntimeAgentRuntimeArtifact</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.get"></a>

```csharp
private BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>[]

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironments">PutHostingEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetHostingEnvironments">ResetHostingEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetWorkloadIdentities">ResetWorkloadIdentities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostingEnvironments` <a name="PutHostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironments"></a>

```csharp
private void PutHostingEnvironments(IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironments.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>[]

---

##### `ResetHostingEnvironments` <a name="ResetHostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetHostingEnvironments"></a>

```csharp
private void ResetHostingEnvironments()
```

##### `ResetWorkloadIdentities` <a name="ResetWorkloadIdentities" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetWorkloadIdentities"></a>

```csharp
private void ResetWorkloadIdentities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironments">HostingEnvironments</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironmentsInput">HostingEnvironmentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentitiesInput">WorkloadIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentities">WorkloadIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostingEnvironments`<sup>Required</sup> <a name="HostingEnvironments" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironments"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList HostingEnvironments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentsList</a>

---

##### `HostingEnvironmentsInput`<sup>Optional</sup> <a name="HostingEnvironmentsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironmentsInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments[] HostingEnvironmentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironments</a>[]

---

##### `WorkloadIdentitiesInput`<sup>Optional</sup> <a name="WorkloadIdentitiesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentitiesInput"></a>

```csharp
public string[] WorkloadIdentitiesInput { get; }
```

- *Type:* string[]

---

##### `WorkloadIdentities`<sup>Required</sup> <a name="WorkloadIdentities" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentities"></a>

```csharp
public string[] WorkloadIdentities { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">ResetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">ResetMatchValueStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValueString` <a name="ResetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```csharp
private void ResetMatchValueString()
```

##### `ResetMatchValueStringList` <a name="ResetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```csharp
private void ResetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">MatchValueStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">MatchValueStringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchValueStringInput`<sup>Optional</sup> <a name="MatchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```csharp
public string MatchValueStringInput { get; }
```

- *Type:* string

---

##### `MatchValueStringListInput`<sup>Optional</sup> <a name="MatchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```csharp
public string[] MatchValueStringListInput { get; }
```

- *Type:* string[]

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```csharp
public string MatchValueString { get; }
```

- *Type:* string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```csharp
public string[] MatchValueStringList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">PutClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">ResetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">ResetClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaimMatchValue` <a name="PutClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```csharp
private void PutClaimMatchValue(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `ResetClaimMatchOperator` <a name="ResetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```csharp
private void ResetClaimMatchOperator()
```

##### `ResetClaimMatchValue` <a name="ResetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```csharp
private void ResetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">ClaimMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">ClaimMatchValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference ClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `ClaimMatchOperatorInput`<sup>Optional</sup> <a name="ClaimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```csharp
public string ClaimMatchOperatorInput { get; }
```

- *Type:* string

---

##### `ClaimMatchValueInput`<sup>Optional</sup> <a name="ClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue ClaimMatchValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```csharp
public string ClaimMatchOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```csharp
private BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">PutAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">ResetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">ResetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">ResetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizingClaimMatchValue` <a name="PutAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```csharp
private void PutAuthorizingClaimMatchValue(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `ResetAuthorizingClaimMatchValue` <a name="ResetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```csharp
private void ResetAuthorizingClaimMatchValue()
```

##### `ResetInboundTokenClaimName` <a name="ResetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```csharp
private void ResetInboundTokenClaimName()
```

##### `ResetInboundTokenClaimValueType` <a name="ResetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```csharp
private void ResetInboundTokenClaimValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">AuthorizingClaimMatchValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">InboundTokenClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">InboundTokenClaimValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference AuthorizingClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `AuthorizingClaimMatchValueInput`<sup>Optional</sup> <a name="AuthorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue AuthorizingClaimMatchValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `InboundTokenClaimNameInput`<sup>Optional</sup> <a name="InboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```csharp
public string InboundTokenClaimNameInput { get; }
```

- *Type:* string

---

##### `InboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="InboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```csharp
public string InboundTokenClaimValueTypeInput { get; }
```

- *Type:* string

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```csharp
public string InboundTokenClaimName { get; }
```

- *Type:* string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```csharp
public string InboundTokenClaimValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration">PutAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">PutCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint">PutPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides">PutPrivateEndpointOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">ResetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">ResetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedWorkloadConfiguration">ResetAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">ResetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">ResetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint">ResetPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverrides">ResetPrivateEndpointOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedWorkloadConfiguration` <a name="PutAllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration"></a>

```csharp
private void PutAllowedWorkloadConfiguration(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

---

##### `PutCustomClaims` <a name="PutCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```csharp
private void PutCustomClaims(IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `PutPrivateEndpoint` <a name="PutPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint"></a>

```csharp
private void PutPrivateEndpoint(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---

##### `PutPrivateEndpointOverrides` <a name="PutPrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides"></a>

```csharp
private void PutPrivateEndpointOverrides(IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

---

##### `ResetAllowedAudience` <a name="ResetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```csharp
private void ResetAllowedAudience()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```csharp
private void ResetAllowedClients()
```

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```csharp
private void ResetAllowedScopes()
```

##### `ResetAllowedWorkloadConfiguration` <a name="ResetAllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedWorkloadConfiguration"></a>

```csharp
private void ResetAllowedWorkloadConfiguration()
```

##### `ResetCustomClaims` <a name="ResetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```csharp
private void ResetCustomClaims()
```

##### `ResetDiscoveryUrl` <a name="ResetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```csharp
private void ResetDiscoveryUrl()
```

##### `ResetPrivateEndpoint` <a name="ResetPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint"></a>

```csharp
private void ResetPrivateEndpoint()
```

##### `ResetPrivateEndpointOverrides` <a name="ResetPrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverrides"></a>

```csharp
private void ResetPrivateEndpointOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfiguration">AllowedWorkloadConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">CustomClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrides">PrivateEndpointOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">AllowedAudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfigurationInput">AllowedWorkloadConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">CustomClaimsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput">PrivateEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverridesInput">PrivateEndpointOverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedWorkloadConfiguration`<sup>Required</sup> <a name="AllowedWorkloadConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfiguration"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference AllowedWorkloadConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference</a>

---

##### `CustomClaims`<sup>Required</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList CustomClaims { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference PrivateEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference</a>

---

##### `PrivateEndpointOverrides`<sup>Required</sup> <a name="PrivateEndpointOverrides" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrides"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList PrivateEndpointOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList</a>

---

##### `AllowedAudienceInput`<sup>Optional</sup> <a name="AllowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```csharp
public string[] AllowedAudienceInput { get; }
```

- *Type:* string[]

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```csharp
public string[] AllowedClientsInput { get; }
```

- *Type:* string[]

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```csharp
public string[] AllowedScopesInput { get; }
```

- *Type:* string[]

---

##### `AllowedWorkloadConfigurationInput`<sup>Optional</sup> <a name="AllowedWorkloadConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration AllowedWorkloadConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

---

##### `CustomClaimsInput`<sup>Optional</sup> <a name="CustomClaimsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] CustomClaimsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```csharp
public string DiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointInput`<sup>Optional</sup> <a name="PrivateEndpointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint PrivateEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---

##### `PrivateEndpointOverridesInput`<sup>Optional</sup> <a name="PrivateEndpointOverridesInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverridesInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] PrivateEndpointOverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```csharp
public string[] AllowedAudience { get; }
```

- *Type:* string[]

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; }
```

- *Type:* string[]

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; }
```

- *Type:* string[]

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType">ResetEndpointIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">ResetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier">ResetVpcIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointIpAddressType` <a name="ResetEndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType"></a>

```csharp
private void ResetEndpointIpAddressType()
```

##### `ResetRoutingDomain` <a name="ResetRoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```csharp
private void ResetRoutingDomain()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcIdentifier` <a name="ResetVpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier"></a>

```csharp
private void ResetVpcIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">EndpointIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">RoutingDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">VpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">RoutingDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointIpAddressTypeInput`<sup>Optional</sup> <a name="EndpointIpAddressTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```csharp
public string EndpointIpAddressTypeInput { get; }
```

- *Type:* string

---

##### `RoutingDomainInput`<sup>Optional</sup> <a name="RoutingDomainInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```csharp
public string RoutingDomainInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdentifierInput`<sup>Optional</sup> <a name="VpcIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```csharp
public string VpcIdentifierInput { get; }
```

- *Type:* string

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```csharp
public string EndpointIpAddressType { get; }
```

- *Type:* string

---

##### `RoutingDomain`<sup>Required</sup> <a name="RoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```csharp
public string RoutingDomain { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource">PutManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource">PutSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource">ResetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource">ResetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedVpcResource` <a name="PutManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource"></a>

```csharp
private void PutManagedVpcResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---

##### `PutSelfManagedLatticeResource` <a name="PutSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```csharp
private void PutSelfManagedLatticeResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---

##### `ResetManagedVpcResource` <a name="ResetManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource"></a>

```csharp
private void ResetManagedVpcResource()
```

##### `ResetSelfManagedLatticeResource` <a name="ResetSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```csharp
private void ResetSelfManagedLatticeResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput">ManagedVpcResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">SelfManagedLatticeResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedVpcResource`<sup>Required</sup> <a name="ManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference ManagedVpcResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference</a>

---

##### `SelfManagedLatticeResource`<sup>Required</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference SelfManagedLatticeResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference</a>

---

##### `ManagedVpcResourceInput`<sup>Optional</sup> <a name="ManagedVpcResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource ManagedVpcResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---

##### `SelfManagedLatticeResourceInput`<sup>Optional</sup> <a name="SelfManagedLatticeResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource SelfManagedLatticeResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get"></a>

```csharp
private BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint">PutPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetPrivateEndpoint">ResetPrivateEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateEndpoint` <a name="PutPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint"></a>

```csharp
private void PutPrivateEndpoint(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetPrivateEndpoint` <a name="ResetPrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetPrivateEndpoint"></a>

```csharp
private void ResetPrivateEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpointInput">PrivateEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpoint"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference PrivateEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointInput`<sup>Optional</sup> <a name="PrivateEndpointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpointInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint PrivateEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType">ResetEndpointIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">ResetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier">ResetVpcIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointIpAddressType` <a name="ResetEndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetEndpointIpAddressType"></a>

```csharp
private void ResetEndpointIpAddressType()
```

##### `ResetRoutingDomain` <a name="ResetRoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```csharp
private void ResetRoutingDomain()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcIdentifier` <a name="ResetVpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetVpcIdentifier"></a>

```csharp
private void ResetVpcIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">EndpointIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">RoutingDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">VpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">RoutingDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointIpAddressTypeInput`<sup>Optional</sup> <a name="EndpointIpAddressTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```csharp
public string EndpointIpAddressTypeInput { get; }
```

- *Type:* string

---

##### `RoutingDomainInput`<sup>Optional</sup> <a name="RoutingDomainInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```csharp
public string RoutingDomainInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdentifierInput`<sup>Optional</sup> <a name="VpcIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```csharp
public string VpcIdentifierInput { get; }
```

- *Type:* string

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```csharp
public string EndpointIpAddressType { get; }
```

- *Type:* string

---

##### `RoutingDomain`<sup>Required</sup> <a name="RoutingDomain" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```csharp
public string RoutingDomain { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource">PutManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource">PutSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetManagedVpcResource">ResetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetSelfManagedLatticeResource">ResetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedVpcResource` <a name="PutManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource"></a>

```csharp
private void PutManagedVpcResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

---

##### `PutSelfManagedLatticeResource` <a name="PutSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```csharp
private void PutSelfManagedLatticeResource(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

---

##### `ResetManagedVpcResource` <a name="ResetManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetManagedVpcResource"></a>

```csharp
private void ResetManagedVpcResource()
```

##### `ResetSelfManagedLatticeResource` <a name="ResetSelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```csharp
private void ResetSelfManagedLatticeResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResourceInput">ManagedVpcResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">SelfManagedLatticeResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedVpcResource`<sup>Required</sup> <a name="ManagedVpcResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference ManagedVpcResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference</a>

---

##### `SelfManagedLatticeResource`<sup>Required</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference SelfManagedLatticeResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference</a>

---

##### `ManagedVpcResourceInput`<sup>Optional</sup> <a name="ManagedVpcResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource ManagedVpcResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

---

##### `SelfManagedLatticeResourceInput`<sup>Optional</sup> <a name="SelfManagedLatticeResourceInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource SelfManagedLatticeResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier">ResetResourceConfigurationIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationIdentifier` <a name="ResetResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier"></a>

```csharp
private void ResetResourceConfigurationIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">ResourceConfigurationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="ResourceConfigurationIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```csharp
public string ResourceConfigurationIdentifierInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```csharp
public string ResourceConfigurationIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier">ResetResourceConfigurationIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationIdentifier` <a name="ResetResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier"></a>

```csharp
private void ResetResourceConfigurationIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">ResourceConfigurationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="ResourceConfigurationIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```csharp
public string ResourceConfigurationIdentifierInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```csharp
public string ResourceConfigurationIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---


### BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference <a name="BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">PutCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">ResetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomJwtAuthorizer` <a name="PutCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```csharp
private void PutCustomJwtAuthorizer(BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `ResetCustomJwtAuthorizer` <a name="ResetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```csharp
private void ResetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">CustomJwtAuthorizerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```csharp
public BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference CustomJwtAuthorizer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `CustomJwtAuthorizerInput`<sup>Optional</sup> <a name="CustomJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer CustomJwtAuthorizerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeAuthorizerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeAuthorizerConfiguration">BedrockagentcoreRuntimeAuthorizerConfiguration</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetAccessPointArn">ResetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessPointArn` <a name="ResetAccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetAccessPointArn"></a>

```csharp
private void ResetAccessPointArn()
```

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArnInput">AccessPointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArn">AccessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPointArnInput`<sup>Optional</sup> <a name="AccessPointArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArnInput"></a>

```csharp
public string AccessPointArnInput { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.accessPointArn"></a>

```csharp
public string AccessPointArn { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsList <a name="BedrockagentcoreRuntimeFilesystemConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.get"></a>

```csharp
private BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>[]

---


### BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putEfsAccessPoint">PutEfsAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putS3FilesAccessPoint">PutS3FilesAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putSessionStorage">PutSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetEfsAccessPoint">ResetEfsAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetS3FilesAccessPoint">ResetS3FilesAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetSessionStorage">ResetSessionStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfsAccessPoint` <a name="PutEfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putEfsAccessPoint"></a>

```csharp
private void PutEfsAccessPoint(BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putEfsAccessPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

---

##### `PutS3FilesAccessPoint` <a name="PutS3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putS3FilesAccessPoint"></a>

```csharp
private void PutS3FilesAccessPoint(BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putS3FilesAccessPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

---

##### `PutSessionStorage` <a name="PutSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putSessionStorage"></a>

```csharp
private void PutSessionStorage(BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.putSessionStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

---

##### `ResetEfsAccessPoint` <a name="ResetEfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetEfsAccessPoint"></a>

```csharp
private void ResetEfsAccessPoint()
```

##### `ResetS3FilesAccessPoint` <a name="ResetS3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetS3FilesAccessPoint"></a>

```csharp
private void ResetS3FilesAccessPoint()
```

##### `ResetSessionStorage` <a name="ResetSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.resetSessionStorage"></a>

```csharp
private void ResetSessionStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPoint">EfsAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPoint">S3FilesAccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorage">SessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPointInput">EfsAccessPointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPointInput">S3FilesAccessPointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorageInput">SessionStorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EfsAccessPoint`<sup>Required</sup> <a name="EfsAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPoint"></a>

```csharp
public BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference EfsAccessPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference</a>

---

##### `S3FilesAccessPoint`<sup>Required</sup> <a name="S3FilesAccessPoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPoint"></a>

```csharp
public BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference S3FilesAccessPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference</a>

---

##### `SessionStorage`<sup>Required</sup> <a name="SessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorage"></a>

```csharp
public BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference SessionStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference</a>

---

##### `EfsAccessPointInput`<sup>Optional</sup> <a name="EfsAccessPointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.efsAccessPointInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint EfsAccessPointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint</a>

---

##### `S3FilesAccessPointInput`<sup>Optional</sup> <a name="S3FilesAccessPointInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.s3FilesAccessPointInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint S3FilesAccessPointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

---

##### `SessionStorageInput`<sup>Optional</sup> <a name="SessionStorageInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.sessionStorageInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage SessionStorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurations">BedrockagentcoreRuntimeFilesystemConfigurations</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetAccessPointArn">ResetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessPointArn` <a name="ResetAccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetAccessPointArn"></a>

```csharp
private void ResetAccessPointArn()
```

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArnInput">AccessPointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArn">AccessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPointArnInput`<sup>Optional</sup> <a name="AccessPointArnInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArnInput"></a>

```csharp
public string AccessPointArnInput { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.accessPointArn"></a>

```csharp
public string AccessPointArn { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint">BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint</a>

---


### BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference <a name="BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage">BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage</a>

---


### BedrockagentcoreRuntimeLifecycleConfigurationOutputReference <a name="BedrockagentcoreRuntimeLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeLifecycleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout">ResetIdleRuntimeSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime">ResetMaxLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleRuntimeSessionTimeout` <a name="ResetIdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout"></a>

```csharp
private void ResetIdleRuntimeSessionTimeout()
```

##### `ResetMaxLifetime` <a name="ResetMaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```csharp
private void ResetMaxLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput">IdleRuntimeSessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput">MaxLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">IdleRuntimeSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetime">MaxLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleRuntimeSessionTimeoutInput`<sup>Optional</sup> <a name="IdleRuntimeSessionTimeoutInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput"></a>

```csharp
public double IdleRuntimeSessionTimeoutInput { get; }
```

- *Type:* double

---

##### `MaxLifetimeInput`<sup>Optional</sup> <a name="MaxLifetimeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```csharp
public double MaxLifetimeInput { get; }
```

- *Type:* double

---

##### `IdleRuntimeSessionTimeout`<sup>Required</sup> <a name="IdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```csharp
public double IdleRuntimeSessionTimeout { get; }
```

- *Type:* double

---

##### `MaxLifetime`<sup>Required</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```csharp
public double MaxLifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeLifecycleConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeLifecycleConfiguration">BedrockagentcoreRuntimeLifecycleConfiguration</a>

---


### BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

---


### BedrockagentcoreRuntimeNetworkConfigurationOutputReference <a name="BedrockagentcoreRuntimeNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig">PutNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig">ResetNetworkModeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkModeConfig` <a name="PutNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```csharp
private void PutNetworkModeConfig(BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

---

##### `ResetNetworkModeConfig` <a name="ResetNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```csharp
private void ResetNetworkModeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput">NetworkModeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkModeConfig`<sup>Required</sup> <a name="NetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```csharp
public BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference NetworkModeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference</a>

---

##### `NetworkModeConfigInput`<sup>Optional</sup> <a name="NetworkModeConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig NetworkModeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig</a>

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkModeInput"></a>

```csharp
public string NetworkModeInput { get; }
```

- *Type:* string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeNetworkConfiguration">BedrockagentcoreRuntimeNetworkConfiguration</a>

---


### BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference <a name="BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist">ResetRequestHeaderAllowlist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequestHeaderAllowlist` <a name="ResetRequestHeaderAllowlist" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist"></a>

```csharp
private void ResetRequestHeaderAllowlist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput">RequestHeaderAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist">RequestHeaderAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeaderAllowlistInput`<sup>Optional</sup> <a name="RequestHeaderAllowlistInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput"></a>

```csharp
public string[] RequestHeaderAllowlistInput { get; }
```

- *Type:* string[]

---

##### `RequestHeaderAllowlist`<sup>Required</sup> <a name="RequestHeaderAllowlist" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist"></a>

```csharp
public string[] RequestHeaderAllowlist { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreRuntimeRequestHeaderConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeRequestHeaderConfiguration">BedrockagentcoreRuntimeRequestHeaderConfiguration</a>

---


### BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">WorkloadIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails">BedrockagentcoreRuntimeWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkloadIdentityArn`<sup>Required</sup> <a name="WorkloadIdentityArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```csharp
public string WorkloadIdentityArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreRuntimeWorkloadIdentityDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntime.BedrockagentcoreRuntimeWorkloadIdentityDetails">BedrockagentcoreRuntimeWorkloadIdentityDetails</a>

---



