# `bedrockAgent` Submodule <a name="`bedrockAgent` Submodule" id="@cdktn/provider-awscc.bedrockAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgent <a name="BedrockAgent" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent awscc_bedrock_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgent(Construct Scope, string Id, BedrockAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig">BedrockAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig">BedrockAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups">PutActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators">PutAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration">PutCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration">PutGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases">PutKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration">PutMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration">PutPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups">ResetActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration">ResetAgentCollaboration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators">ResetAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn">ResetAgentResourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare">ResetAutoPrepare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn">ResetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration">ResetCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel">ResetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration">ResetGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds">ResetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases">ResetKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration">ResetMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType">ResetOrchestrationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration">ResetPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete">ResetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags">ResetTestAliasTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionGroups` <a name="PutActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups"></a>

```csharp
private void PutActionGroups(IResolvable|BedrockAgentActionGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

---

##### `PutAgentCollaborators` <a name="PutAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators"></a>

```csharp
private void PutAgentCollaborators(IResolvable|BedrockAgentAgentCollaborators[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

---

##### `PutCustomOrchestration` <a name="PutCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration"></a>

```csharp
private void PutCustomOrchestration(BedrockAgentCustomOrchestration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `PutGuardrailConfiguration` <a name="PutGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration"></a>

```csharp
private void PutGuardrailConfiguration(BedrockAgentGuardrailConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `PutKnowledgeBases` <a name="PutKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases"></a>

```csharp
private void PutKnowledgeBases(IResolvable|BedrockAgentKnowledgeBases[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

---

##### `PutMemoryConfiguration` <a name="PutMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration"></a>

```csharp
private void PutMemoryConfiguration(BedrockAgentMemoryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `PutPromptOverrideConfiguration` <a name="PutPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration"></a>

```csharp
private void PutPromptOverrideConfiguration(BedrockAgentPromptOverrideConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `ResetActionGroups` <a name="ResetActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups"></a>

```csharp
private void ResetActionGroups()
```

##### `ResetAgentCollaboration` <a name="ResetAgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration"></a>

```csharp
private void ResetAgentCollaboration()
```

##### `ResetAgentCollaborators` <a name="ResetAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators"></a>

```csharp
private void ResetAgentCollaborators()
```

##### `ResetAgentResourceRoleArn` <a name="ResetAgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn"></a>

```csharp
private void ResetAgentResourceRoleArn()
```

##### `ResetAutoPrepare` <a name="ResetAutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare"></a>

```csharp
private void ResetAutoPrepare()
```

##### `ResetCustomerEncryptionKeyArn` <a name="ResetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn"></a>

```csharp
private void ResetCustomerEncryptionKeyArn()
```

##### `ResetCustomOrchestration` <a name="ResetCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration"></a>

```csharp
private void ResetCustomOrchestration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFoundationModel` <a name="ResetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel"></a>

```csharp
private void ResetFoundationModel()
```

##### `ResetGuardrailConfiguration` <a name="ResetGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration"></a>

```csharp
private void ResetGuardrailConfiguration()
```

##### `ResetIdleSessionTtlInSeconds` <a name="ResetIdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds"></a>

```csharp
private void ResetIdleSessionTtlInSeconds()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetKnowledgeBases` <a name="ResetKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases"></a>

```csharp
private void ResetKnowledgeBases()
```

##### `ResetMemoryConfiguration` <a name="ResetMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration"></a>

```csharp
private void ResetMemoryConfiguration()
```

##### `ResetOrchestrationType` <a name="ResetOrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType"></a>

```csharp
private void ResetOrchestrationType()
```

##### `ResetPromptOverrideConfiguration` <a name="ResetPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration"></a>

```csharp
private void ResetPromptOverrideConfiguration()
```

##### `ResetSkipResourceInUseCheckOnDelete` <a name="ResetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete"></a>

```csharp
private void ResetSkipResourceInUseCheckOnDelete()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTestAliasTags` <a name="ResetTestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags"></a>

```csharp
private void ResetTestAliasTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups">ActionGroups</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn">AgentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators">AgentCollaborators</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus">AgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration">CustomOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons">FailureReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases">KnowledgeBases</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration">MemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt">PreparedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration">PromptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions">RecommendedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput">ActionGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput">AgentCollaborationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput">AgentCollaboratorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput">AgentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput">AgentResourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput">AutoPrepareInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput">CustomerEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput">CustomOrchestrationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput">FoundationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput">GuardrailConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput">IdleSessionTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput">KnowledgeBasesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput">MemoryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput">OrchestrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput">PromptOverrideConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput">SkipResourceInUseCheckOnDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput">TestAliasTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration">AgentCollaboration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName">AgentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn">AgentResourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare">AutoPrepare</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel">FoundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType">OrchestrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags">TestAliasTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups"></a>

```csharp
public BedrockAgentActionGroupsList ActionGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a>

---

##### `AgentArn`<sup>Required</sup> <a name="AgentArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn"></a>

```csharp
public string AgentArn { get; }
```

- *Type:* string

---

##### `AgentCollaborators`<sup>Required</sup> <a name="AgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators"></a>

```csharp
public BedrockAgentAgentCollaboratorsList AgentCollaborators { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a>

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus"></a>

```csharp
public string AgentStatus { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomOrchestration`<sup>Required</sup> <a name="CustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration"></a>

```csharp
public BedrockAgentCustomOrchestrationOutputReference CustomOrchestration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a>

---

##### `FailureReasons`<sup>Required</sup> <a name="FailureReasons" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons"></a>

```csharp
public string[] FailureReasons { get; }
```

- *Type:* string[]

---

##### `GuardrailConfiguration`<sup>Required</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration"></a>

```csharp
public BedrockAgentGuardrailConfigurationOutputReference GuardrailConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeBases`<sup>Required</sup> <a name="KnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases"></a>

```csharp
public BedrockAgentKnowledgeBasesList KnowledgeBases { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a>

---

##### `MemoryConfiguration`<sup>Required</sup> <a name="MemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration"></a>

```csharp
public BedrockAgentMemoryConfigurationOutputReference MemoryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a>

---

##### `PreparedAt`<sup>Required</sup> <a name="PreparedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt"></a>

```csharp
public string PreparedAt { get; }
```

- *Type:* string

---

##### `PromptOverrideConfiguration`<sup>Required</sup> <a name="PromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration"></a>

```csharp
public BedrockAgentPromptOverrideConfigurationOutputReference PromptOverrideConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a>

---

##### `RecommendedActions`<sup>Required</sup> <a name="RecommendedActions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions"></a>

```csharp
public string[] RecommendedActions { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ActionGroupsInput`<sup>Optional</sup> <a name="ActionGroupsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput"></a>

```csharp
public IResolvable|BedrockAgentActionGroups[] ActionGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

---

##### `AgentCollaborationInput`<sup>Optional</sup> <a name="AgentCollaborationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput"></a>

```csharp
public string AgentCollaborationInput { get; }
```

- *Type:* string

---

##### `AgentCollaboratorsInput`<sup>Optional</sup> <a name="AgentCollaboratorsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput"></a>

```csharp
public IResolvable|BedrockAgentAgentCollaborators[] AgentCollaboratorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

---

##### `AgentNameInput`<sup>Optional</sup> <a name="AgentNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput"></a>

```csharp
public string AgentNameInput { get; }
```

- *Type:* string

---

##### `AgentResourceRoleArnInput`<sup>Optional</sup> <a name="AgentResourceRoleArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput"></a>

```csharp
public string AgentResourceRoleArnInput { get; }
```

- *Type:* string

---

##### `AutoPrepareInput`<sup>Optional</sup> <a name="AutoPrepareInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput"></a>

```csharp
public bool|IResolvable AutoPrepareInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomerEncryptionKeyArnInput`<sup>Optional</sup> <a name="CustomerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput"></a>

```csharp
public string CustomerEncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `CustomOrchestrationInput`<sup>Optional</sup> <a name="CustomOrchestrationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput"></a>

```csharp
public IResolvable|BedrockAgentCustomOrchestration CustomOrchestrationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FoundationModelInput`<sup>Optional</sup> <a name="FoundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput"></a>

```csharp
public string FoundationModelInput { get; }
```

- *Type:* string

---

##### `GuardrailConfigurationInput`<sup>Optional</sup> <a name="GuardrailConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput"></a>

```csharp
public IResolvable|BedrockAgentGuardrailConfiguration GuardrailConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `IdleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="IdleSessionTtlInSecondsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput"></a>

```csharp
public double IdleSessionTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `KnowledgeBasesInput`<sup>Optional</sup> <a name="KnowledgeBasesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput"></a>

```csharp
public IResolvable|BedrockAgentKnowledgeBases[] KnowledgeBasesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

---

##### `MemoryConfigurationInput`<sup>Optional</sup> <a name="MemoryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput"></a>

```csharp
public IResolvable|BedrockAgentMemoryConfiguration MemoryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `OrchestrationTypeInput`<sup>Optional</sup> <a name="OrchestrationTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput"></a>

```csharp
public string OrchestrationTypeInput { get; }
```

- *Type:* string

---

##### `PromptOverrideConfigurationInput`<sup>Optional</sup> <a name="PromptOverrideConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfiguration PromptOverrideConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `SkipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput"></a>

```csharp
public bool|IResolvable SkipResourceInUseCheckOnDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TestAliasTagsInput`<sup>Optional</sup> <a name="TestAliasTagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestAliasTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AgentCollaboration`<sup>Required</sup> <a name="AgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration"></a>

```csharp
public string AgentCollaboration { get; }
```

- *Type:* string

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName"></a>

```csharp
public string AgentName { get; }
```

- *Type:* string

---

##### `AgentResourceRoleArn`<sup>Required</sup> <a name="AgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn"></a>

```csharp
public string AgentResourceRoleArn { get; }
```

- *Type:* string

---

##### `AutoPrepare`<sup>Required</sup> <a name="AutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare"></a>

```csharp
public bool|IResolvable AutoPrepare { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn"></a>

```csharp
public string CustomerEncryptionKeyArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FoundationModel`<sup>Required</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel"></a>

```csharp
public string FoundationModel { get; }
```

- *Type:* string

---

##### `IdleSessionTtlInSeconds`<sup>Required</sup> <a name="IdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; }
```

- *Type:* double

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `OrchestrationType`<sup>Required</sup> <a name="OrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType"></a>

```csharp
public string OrchestrationType { get; }
```

- *Type:* string

---

##### `SkipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete"></a>

```csharp
public bool|IResolvable SkipResourceInUseCheckOnDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TestAliasTags`<sup>Required</sup> <a name="TestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestAliasTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentActionGroups <a name="BedrockAgentActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroups {
    BedrockAgentActionGroupsActionGroupExecutor ActionGroupExecutor = null,
    string ActionGroupName = null,
    string ActionGroupState = null,
    BedrockAgentActionGroupsApiSchema ApiSchema = null,
    string Description = null,
    BedrockAgentActionGroupsFunctionSchema FunctionSchema = null,
    string ParentActionGroupSignature = null,
    bool|IResolvable SkipResourceInUseCheckOnDelete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor">ActionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | Type of Executors for an Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName">ActionGroupName</a></code> | <code>string</code> | Name of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState">ActionGroupState</a></code> | <code>string</code> | State of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | Contains information about the API Schema for the Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description">Description</a></code> | <code>string</code> | Description of action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema">FunctionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | Schema of Functions. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature">ParentActionGroupSignature</a></code> | <code>string</code> | Action Group Signature for a BuiltIn Action. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to allow deleting action group while it is in use. |

---

##### `ActionGroupExecutor`<sup>Optional</sup> <a name="ActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor"></a>

```csharp
public BedrockAgentActionGroupsActionGroupExecutor ActionGroupExecutor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

Type of Executors for an Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#action_group_executor BedrockAgent#action_group_executor}

---

##### `ActionGroupName`<sup>Optional</sup> <a name="ActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName"></a>

```csharp
public string ActionGroupName { get; set; }
```

- *Type:* string

Name of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#action_group_name BedrockAgent#action_group_name}

---

##### `ActionGroupState`<sup>Optional</sup> <a name="ActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState"></a>

```csharp
public string ActionGroupState { get; set; }
```

- *Type:* string

State of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#action_group_state BedrockAgent#action_group_state}

---

##### `ApiSchema`<sup>Optional</sup> <a name="ApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema"></a>

```csharp
public BedrockAgentActionGroupsApiSchema ApiSchema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

Contains information about the API Schema for the Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#api_schema BedrockAgent#api_schema}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `FunctionSchema`<sup>Optional</sup> <a name="FunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema"></a>

```csharp
public BedrockAgentActionGroupsFunctionSchema FunctionSchema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

Schema of Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#function_schema BedrockAgent#function_schema}

---

##### `ParentActionGroupSignature`<sup>Optional</sup> <a name="ParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature"></a>

```csharp
public string ParentActionGroupSignature { get; set; }
```

- *Type:* string

Action Group Signature for a BuiltIn Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#parent_action_group_signature BedrockAgent#parent_action_group_signature}

---

##### `SkipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete"></a>

```csharp
public bool|IResolvable SkipResourceInUseCheckOnDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to allow deleting action group while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

### BedrockAgentActionGroupsActionGroupExecutor <a name="BedrockAgentActionGroupsActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsActionGroupExecutor {
    string CustomControl = null,
    string Lambda = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl">CustomControl</a></code> | <code>string</code> | Custom control of action execution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda">Lambda</a></code> | <code>string</code> | ARN of a Lambda. |

---

##### `CustomControl`<sup>Optional</sup> <a name="CustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl"></a>

```csharp
public string CustomControl { get; set; }
```

- *Type:* string

Custom control of action execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#custom_control BedrockAgent#custom_control}

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda"></a>

```csharp
public string Lambda { get; set; }
```

- *Type:* string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentActionGroupsApiSchema <a name="BedrockAgentActionGroupsApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsApiSchema {
    string Payload = null,
    BedrockAgentActionGroupsApiSchemaS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload">Payload</a></code> | <code>string</code> | String OpenAPI Payload. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | The identifier for the S3 resource. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload"></a>

```csharp
public string Payload { get; set; }
```

- *Type:* string

String OpenAPI Payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#payload BedrockAgent#payload}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3"></a>

```csharp
public BedrockAgentActionGroupsApiSchemaS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#s3 BedrockAgent#s3}

---

### BedrockAgentActionGroupsApiSchemaS3 <a name="BedrockAgentActionGroupsApiSchemaS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsApiSchemaS3 {
    string S3BucketName = null,
    string S3ObjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey">S3ObjectKey</a></code> | <code>string</code> | A object key in S3. |

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#s3_bucket_name BedrockAgent#s3_bucket_name}

---

##### `S3ObjectKey`<sup>Optional</sup> <a name="S3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey"></a>

```csharp
public string S3ObjectKey { get; set; }
```

- *Type:* string

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#s3_object_key BedrockAgent#s3_object_key}

---

### BedrockAgentActionGroupsFunctionSchema <a name="BedrockAgentActionGroupsFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchema {
    IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctions[] Functions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions">Functions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]</code> | List of Function definitions. |

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctions[] Functions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

List of Function definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#functions BedrockAgent#functions}

---

### BedrockAgentActionGroupsFunctionSchemaFunctions <a name="BedrockAgentActionGroupsFunctionSchemaFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchemaFunctions {
    string Description = null,
    string Name = null,
    IResolvable|System.Collections.Generic.IDictionary<string, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> Parameters = null,
    string RequireConfirmation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description">Description</a></code> | <code>string</code> | Description of function. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name">Name</a></code> | <code>string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>></code> | A map of parameter name and detail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation">RequireConfirmation</a></code> | <code>string</code> | ENUM to check if action requires user confirmation. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#name BedrockAgent#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

A map of parameter name and detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#parameters BedrockAgent#parameters}

---

##### `RequireConfirmation`<sup>Optional</sup> <a name="RequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation"></a>

```csharp
public string RequireConfirmation { get; set; }
```

- *Type:* string

ENUM to check if action requires user confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#require_confirmation BedrockAgent#require_confirmation}

---

### BedrockAgentActionGroupsFunctionSchemaFunctionsParameters <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchemaFunctionsParameters {
    string Description = null,
    bool|IResolvable Required = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description">Description</a></code> | <code>string</code> | Description of function parameter. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Information about if a parameter is required for function call. Default to false. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type">Type</a></code> | <code>string</code> | Parameter Type. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of function parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Information about if a parameter is required for function call. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#required BedrockAgent#required}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Parameter Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#type BedrockAgent#type}

---

### BedrockAgentAgentCollaborators <a name="BedrockAgentAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAgentCollaborators {
    BedrockAgentAgentCollaboratorsAgentDescriptor AgentDescriptor = null,
    string CollaborationInstruction = null,
    string CollaboratorName = null,
    string RelayConversationHistory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor">AgentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | Agent descriptor for agent collaborator. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>string</code> | Agent collaborator instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName">CollaboratorName</a></code> | <code>string</code> | Agent collaborator name. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>string</code> | Relay conversation history state. |

---

##### `AgentDescriptor`<sup>Optional</sup> <a name="AgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor"></a>

```csharp
public BedrockAgentAgentCollaboratorsAgentDescriptor AgentDescriptor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

Agent descriptor for agent collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#agent_descriptor BedrockAgent#agent_descriptor}

---

##### `CollaborationInstruction`<sup>Optional</sup> <a name="CollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction"></a>

```csharp
public string CollaborationInstruction { get; set; }
```

- *Type:* string

Agent collaborator instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#collaboration_instruction BedrockAgent#collaboration_instruction}

---

##### `CollaboratorName`<sup>Optional</sup> <a name="CollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName"></a>

```csharp
public string CollaboratorName { get; set; }
```

- *Type:* string

Agent collaborator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#collaborator_name BedrockAgent#collaborator_name}

---

##### `RelayConversationHistory`<sup>Optional</sup> <a name="RelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory"></a>

```csharp
public string RelayConversationHistory { get; set; }
```

- *Type:* string

Relay conversation history state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#relay_conversation_history BedrockAgent#relay_conversation_history}

---

### BedrockAgentAgentCollaboratorsAgentDescriptor <a name="BedrockAgentAgentCollaboratorsAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAgentCollaboratorsAgentDescriptor {
    string AliasArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn">AliasArn</a></code> | <code>string</code> | Alias ARN for agent descriptor. |

---

##### `AliasArn`<sup>Optional</sup> <a name="AliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn"></a>

```csharp
public string AliasArn { get; set; }
```

- *Type:* string

Alias ARN for agent descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#alias_arn BedrockAgent#alias_arn}

---

### BedrockAgentConfig <a name="BedrockAgentConfig" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentName,
    IResolvable|BedrockAgentActionGroups[] ActionGroups = null,
    string AgentCollaboration = null,
    IResolvable|BedrockAgentAgentCollaborators[] AgentCollaborators = null,
    string AgentResourceRoleArn = null,
    bool|IResolvable AutoPrepare = null,
    string CustomerEncryptionKeyArn = null,
    BedrockAgentCustomOrchestration CustomOrchestration = null,
    string Description = null,
    string FoundationModel = null,
    BedrockAgentGuardrailConfiguration GuardrailConfiguration = null,
    double IdleSessionTtlInSeconds = null,
    string Instruction = null,
    IResolvable|BedrockAgentKnowledgeBases[] KnowledgeBases = null,
    BedrockAgentMemoryConfiguration MemoryConfiguration = null,
    string OrchestrationType = null,
    BedrockAgentPromptOverrideConfiguration PromptOverrideConfiguration = null,
    bool|IResolvable SkipResourceInUseCheckOnDelete = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TestAliasTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName">AgentName</a></code> | <code>string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups">ActionGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]</code> | List of ActionGroups. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration">AgentCollaboration</a></code> | <code>string</code> | Agent collaboration state. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators">AgentCollaborators</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]</code> | List of Agent Collaborators. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn">AgentResourceRoleArn</a></code> | <code>string</code> | ARN of a IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare">AutoPrepare</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to automatically prepare after creating or updating the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>string</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration">CustomOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | Structure for custom orchestration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description">Description</a></code> | <code>string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel">FoundationModel</a></code> | <code>string</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | Configuration for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | Max Session Time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction">Instruction</a></code> | <code>string</code> | Instruction for the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases">KnowledgeBases</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]</code> | List of Agent Knowledge Bases. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration">MemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | Configuration for memory storage. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType">OrchestrationType</a></code> | <code>string</code> | Types of orchestration strategy for agents. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration">PromptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | Configuration for prompt override. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to allow deleting agent while it is in use. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags">TestAliasTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of tag keys and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName"></a>

```csharp
public string AgentName { get; set; }
```

- *Type:* string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#agent_name BedrockAgent#agent_name}

---

##### `ActionGroups`<sup>Optional</sup> <a name="ActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups"></a>

```csharp
public IResolvable|BedrockAgentActionGroups[] ActionGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

List of ActionGroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#action_groups BedrockAgent#action_groups}

---

##### `AgentCollaboration`<sup>Optional</sup> <a name="AgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration"></a>

```csharp
public string AgentCollaboration { get; set; }
```

- *Type:* string

Agent collaboration state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#agent_collaboration BedrockAgent#agent_collaboration}

---

##### `AgentCollaborators`<sup>Optional</sup> <a name="AgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators"></a>

```csharp
public IResolvable|BedrockAgentAgentCollaborators[] AgentCollaborators { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

List of Agent Collaborators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#agent_collaborators BedrockAgent#agent_collaborators}

---

##### `AgentResourceRoleArn`<sup>Optional</sup> <a name="AgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn"></a>

```csharp
public string AgentResourceRoleArn { get; set; }
```

- *Type:* string

ARN of a IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#agent_resource_role_arn BedrockAgent#agent_resource_role_arn}

---

##### `AutoPrepare`<sup>Optional</sup> <a name="AutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare"></a>

```csharp
public bool|IResolvable AutoPrepare { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to automatically prepare after creating or updating the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#auto_prepare BedrockAgent#auto_prepare}

---

##### `CustomerEncryptionKeyArn`<sup>Optional</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn"></a>

```csharp
public string CustomerEncryptionKeyArn { get; set; }
```

- *Type:* string

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#customer_encryption_key_arn BedrockAgent#customer_encryption_key_arn}

---

##### `CustomOrchestration`<sup>Optional</sup> <a name="CustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration"></a>

```csharp
public BedrockAgentCustomOrchestration CustomOrchestration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

Structure for custom orchestration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#custom_orchestration BedrockAgent#custom_orchestration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `FoundationModel`<sup>Optional</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel"></a>

```csharp
public string FoundationModel { get; set; }
```

- *Type:* string

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `GuardrailConfiguration`<sup>Optional</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration"></a>

```csharp
public BedrockAgentGuardrailConfiguration GuardrailConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

Configuration for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#guardrail_configuration BedrockAgent#guardrail_configuration}

---

##### `IdleSessionTtlInSeconds`<sup>Optional</sup> <a name="IdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; set; }
```

- *Type:* double

Max Session Time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#idle_session_ttl_in_seconds BedrockAgent#idle_session_ttl_in_seconds}

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Instruction for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#instruction BedrockAgent#instruction}

---

##### `KnowledgeBases`<sup>Optional</sup> <a name="KnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases"></a>

```csharp
public IResolvable|BedrockAgentKnowledgeBases[] KnowledgeBases { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

List of Agent Knowledge Bases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#knowledge_bases BedrockAgent#knowledge_bases}

---

##### `MemoryConfiguration`<sup>Optional</sup> <a name="MemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration"></a>

```csharp
public BedrockAgentMemoryConfiguration MemoryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

Configuration for memory storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#memory_configuration BedrockAgent#memory_configuration}

---

##### `OrchestrationType`<sup>Optional</sup> <a name="OrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType"></a>

```csharp
public string OrchestrationType { get; set; }
```

- *Type:* string

Types of orchestration strategy for agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#orchestration_type BedrockAgent#orchestration_type}

---

##### `PromptOverrideConfiguration`<sup>Optional</sup> <a name="PromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration"></a>

```csharp
public BedrockAgentPromptOverrideConfiguration PromptOverrideConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

Configuration for prompt override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#prompt_override_configuration BedrockAgent#prompt_override_configuration}

---

##### `SkipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete"></a>

```csharp
public bool|IResolvable SkipResourceInUseCheckOnDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to allow deleting agent while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#tags BedrockAgent#tags}

---

##### `TestAliasTags`<sup>Optional</sup> <a name="TestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestAliasTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#test_alias_tags BedrockAgent#test_alias_tags}

---

### BedrockAgentCustomOrchestration <a name="BedrockAgentCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentCustomOrchestration {
    BedrockAgentCustomOrchestrationExecutor Executor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor">Executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | Types of executors for custom orchestration strategy. |

---

##### `Executor`<sup>Optional</sup> <a name="Executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor"></a>

```csharp
public BedrockAgentCustomOrchestrationExecutor Executor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

Types of executors for custom orchestration strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#executor BedrockAgent#executor}

---

### BedrockAgentCustomOrchestrationExecutor <a name="BedrockAgentCustomOrchestrationExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentCustomOrchestrationExecutor {
    string Lambda = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda">Lambda</a></code> | <code>string</code> | ARN of a Lambda. |

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda"></a>

```csharp
public string Lambda { get; set; }
```

- *Type:* string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentGuardrailConfiguration <a name="BedrockAgentGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentGuardrailConfiguration {
    string GuardrailIdentifier = null,
    string GuardrailVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>string</code> | Identifier for the guardrail, could be the id or the arn. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion">GuardrailVersion</a></code> | <code>string</code> | Version of the guardrail. |

---

##### `GuardrailIdentifier`<sup>Optional</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier"></a>

```csharp
public string GuardrailIdentifier { get; set; }
```

- *Type:* string

Identifier for the guardrail, could be the id or the arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#guardrail_identifier BedrockAgent#guardrail_identifier}

---

##### `GuardrailVersion`<sup>Optional</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion"></a>

```csharp
public string GuardrailVersion { get; set; }
```

- *Type:* string

Version of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#guardrail_version BedrockAgent#guardrail_version}

---

### BedrockAgentKnowledgeBases <a name="BedrockAgentKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentKnowledgeBases {
    string Description = null,
    string KnowledgeBaseId = null,
    string KnowledgeBaseState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description">Description</a></code> | <code>string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState">KnowledgeBaseState</a></code> | <code>string</code> | State of the knowledge base; whether it is enabled or disabled. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `KnowledgeBaseId`<sup>Optional</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; set; }
```

- *Type:* string

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#knowledge_base_id BedrockAgent#knowledge_base_id}

---

##### `KnowledgeBaseState`<sup>Optional</sup> <a name="KnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState"></a>

```csharp
public string KnowledgeBaseState { get; set; }
```

- *Type:* string

State of the knowledge base; whether it is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#knowledge_base_state BedrockAgent#knowledge_base_state}

---

### BedrockAgentMemoryConfiguration <a name="BedrockAgentMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentMemoryConfiguration {
    string[] EnabledMemoryTypes = null,
    BedrockAgentMemoryConfigurationSessionSummaryConfiguration SessionSummaryConfiguration = null,
    double StorageDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes">EnabledMemoryTypes</a></code> | <code>string[]</code> | Types of session storage persisted in memory. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration">SessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | Configuration for Session Summarization. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays">StorageDays</a></code> | <code>double</code> | Maximum number of days to store session details. |

---

##### `EnabledMemoryTypes`<sup>Optional</sup> <a name="EnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes"></a>

```csharp
public string[] EnabledMemoryTypes { get; set; }
```

- *Type:* string[]

Types of session storage persisted in memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#enabled_memory_types BedrockAgent#enabled_memory_types}

---

##### `SessionSummaryConfiguration`<sup>Optional</sup> <a name="SessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration"></a>

```csharp
public BedrockAgentMemoryConfigurationSessionSummaryConfiguration SessionSummaryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

Configuration for Session Summarization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#session_summary_configuration BedrockAgent#session_summary_configuration}

---

##### `StorageDays`<sup>Optional</sup> <a name="StorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays"></a>

```csharp
public double StorageDays { get; set; }
```

- *Type:* double

Maximum number of days to store session details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#storage_days BedrockAgent#storage_days}

---

### BedrockAgentMemoryConfigurationSessionSummaryConfiguration <a name="BedrockAgentMemoryConfigurationSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentMemoryConfigurationSessionSummaryConfiguration {
    double MaxRecentSessions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions">MaxRecentSessions</a></code> | <code>double</code> | Maximum number of Sessions to Summarize. |

---

##### `MaxRecentSessions`<sup>Optional</sup> <a name="MaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions"></a>

```csharp
public double MaxRecentSessions { get; set; }
```

- *Type:* double

Maximum number of Sessions to Summarize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#max_recent_sessions BedrockAgent#max_recent_sessions}

---

### BedrockAgentPromptOverrideConfiguration <a name="BedrockAgentPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentPromptOverrideConfiguration {
    string OverrideLambda = null,
    IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurations[] PromptConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda">OverrideLambda</a></code> | <code>string</code> | ARN of a Lambda. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations">PromptConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | List of BasePromptConfiguration. |

---

##### `OverrideLambda`<sup>Optional</sup> <a name="OverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```csharp
public string OverrideLambda { get; set; }
```

- *Type:* string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#override_lambda BedrockAgent#override_lambda}

---

##### `PromptConfigurations`<sup>Optional</sup> <a name="PromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurations[] PromptConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

List of BasePromptConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#prompt_configurations BedrockAgent#prompt_configurations}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentPromptOverrideConfigurationPromptConfigurations {
    string AdditionalModelRequestFields = null,
    string BasePromptTemplate = null,
    string FoundationModel = null,
    BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration InferenceConfiguration = null,
    string ParserMode = null,
    string PromptCreationMode = null,
    string PromptState = null,
    string PromptType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>string</code> | Additional Model Request Fields for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">BasePromptTemplate</a></code> | <code>string</code> | Base Prompt Template. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel">FoundationModel</a></code> | <code>string</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | Configuration for inference in prompt configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">ParserMode</a></code> | <code>string</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">PromptCreationMode</a></code> | <code>string</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">PromptState</a></code> | <code>string</code> | Prompt State. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">PromptType</a></code> | <code>string</code> | Prompt Type. |

---

##### `AdditionalModelRequestFields`<sup>Optional</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields"></a>

```csharp
public string AdditionalModelRequestFields { get; set; }
```

- *Type:* string

Additional Model Request Fields for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#additional_model_request_fields BedrockAgent#additional_model_request_fields}

---

##### `BasePromptTemplate`<sup>Optional</sup> <a name="BasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```csharp
public string BasePromptTemplate { get; set; }
```

- *Type:* string

Base Prompt Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#base_prompt_template BedrockAgent#base_prompt_template}

---

##### `FoundationModel`<sup>Optional</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel"></a>

```csharp
public string FoundationModel { get; set; }
```

- *Type:* string

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `InferenceConfiguration`<sup>Optional</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```csharp
public BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration InferenceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

Configuration for inference in prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#inference_configuration BedrockAgent#inference_configuration}

---

##### `ParserMode`<sup>Optional</sup> <a name="ParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```csharp
public string ParserMode { get; set; }
```

- *Type:* string

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#parser_mode BedrockAgent#parser_mode}

---

##### `PromptCreationMode`<sup>Optional</sup> <a name="PromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```csharp
public string PromptCreationMode { get; set; }
```

- *Type:* string

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#prompt_creation_mode BedrockAgent#prompt_creation_mode}

---

##### `PromptState`<sup>Optional</sup> <a name="PromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```csharp
public string PromptState { get; set; }
```

- *Type:* string

Prompt State.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#prompt_state BedrockAgent#prompt_state}

---

##### `PromptType`<sup>Optional</sup> <a name="PromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```csharp
public string PromptType { get; set; }
```

- *Type:* string

Prompt Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#prompt_type BedrockAgent#prompt_type}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration {
    double MaximumLength = null,
    string[] StopSequences = null,
    double Temperature = null,
    double TopK = null,
    double TopP = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength">MaximumLength</a></code> | <code>double</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">StopSequences</a></code> | <code>string[]</code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">Temperature</a></code> | <code>double</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">TopK</a></code> | <code>double</code> | Sample from the k most likely next tokens. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">TopP</a></code> | <code>double</code> | Cumulative probability cutoff for token selection. |

---

##### `MaximumLength`<sup>Optional</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength"></a>

```csharp
public double MaximumLength { get; set; }
```

- *Type:* double

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#maximum_length BedrockAgent#maximum_length}

---

##### `StopSequences`<sup>Optional</sup> <a name="StopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```csharp
public string[] StopSequences { get; set; }
```

- *Type:* string[]

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#stop_sequences BedrockAgent#stop_sequences}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#temperature BedrockAgent#temperature}

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```csharp
public double TopK { get; set; }
```

- *Type:* double

Sample from the k most likely next tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#top_k BedrockAgent#top_k}

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```csharp
public double TopP { get; set; }
```

- *Type:* double

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_agent#top_p BedrockAgent#top_p}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentActionGroupsActionGroupExecutorOutputReference <a name="BedrockAgentActionGroupsActionGroupExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsActionGroupExecutorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl">ResetCustomControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomControl` <a name="ResetCustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl"></a>

```csharp
private void ResetCustomControl()
```

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda"></a>

```csharp
private void ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput">CustomControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl">CustomControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda">Lambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomControlInput`<sup>Optional</sup> <a name="CustomControlInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput"></a>

```csharp
public string CustomControlInput { get; }
```

- *Type:* string

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput"></a>

```csharp
public string LambdaInput { get; }
```

- *Type:* string

---

##### `CustomControl`<sup>Required</sup> <a name="CustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl"></a>

```csharp
public string CustomControl { get; }
```

- *Type:* string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda"></a>

```csharp
public string Lambda { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsActionGroupExecutor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---


### BedrockAgentActionGroupsApiSchemaOutputReference <a name="BedrockAgentActionGroupsApiSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsApiSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3"></a>

```csharp
private void PutS3(BedrockAgentActionGroupsApiSchemaS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput">PayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload">Payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3"></a>

```csharp
public BedrockAgentActionGroupsApiSchemaS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput"></a>

```csharp
public string PayloadInput { get; }
```

- *Type:* string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsApiSchemaS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload"></a>

```csharp
public string Payload { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsApiSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---


### BedrockAgentActionGroupsApiSchemaS3OutputReference <a name="BedrockAgentActionGroupsApiSchemaS3OutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsApiSchemaS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey">ResetS3ObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName"></a>

```csharp
private void ResetS3BucketName()
```

##### `ResetS3ObjectKey` <a name="ResetS3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```csharp
private void ResetS3ObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput">S3ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey">S3ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3ObjectKeyInput`<sup>Optional</sup> <a name="S3ObjectKeyInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```csharp
public string S3ObjectKeyInput { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3ObjectKey`<sup>Required</sup> <a name="S3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```csharp
public string S3ObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsApiSchemaS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsList <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchemaFunctionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get"></a>

```csharp
private BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation">ResetRequireConfirmation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|System.Collections.Generic.IDictionary<string, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRequireConfirmation` <a name="ResetRequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation"></a>

```csharp
private void ResetRequireConfirmation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput">RequireConfirmationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation">RequireConfirmation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters"></a>

```csharp
public BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

---

##### `RequireConfirmationInput`<sup>Optional</sup> <a name="RequireConfirmationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput"></a>

```csharp
public string RequireConfirmationInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequireConfirmation`<sup>Required</sup> <a name="RequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation"></a>

```csharp
public string RequireConfirmation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get"></a>

```csharp
private BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockAgentActionGroupsFunctionSchemaFunctionsParameters> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>>

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctionsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters">BedrockAgentActionGroupsFunctionSchemaFunctionsParameters</a>

---


### BedrockAgentActionGroupsFunctionSchemaOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsFunctionSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions">ResetFunctions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctions` <a name="PutFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions"></a>

```csharp
private void PutFunctions(IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

---

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions"></a>

```csharp
private void ResetFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions">Functions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput">FunctionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions"></a>

```csharp
public BedrockAgentActionGroupsFunctionSchemaFunctionsList Functions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a>

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsFunctionSchemaFunctions[] FunctionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions">BedrockAgentActionGroupsFunctionSchemaFunctions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsFunctionSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---


### BedrockAgentActionGroupsList <a name="BedrockAgentActionGroupsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get"></a>

```csharp
private BedrockAgentActionGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>[]

---


### BedrockAgentActionGroupsOutputReference <a name="BedrockAgentActionGroupsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentActionGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor">PutActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema">PutApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema">PutFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor">ResetActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName">ResetActionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState">ResetActionGroupState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema">ResetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema">ResetFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature">ResetParentActionGroupSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete">ResetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionGroupExecutor` <a name="PutActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor"></a>

```csharp
private void PutActionGroupExecutor(BedrockAgentActionGroupsActionGroupExecutor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `PutApiSchema` <a name="PutApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema"></a>

```csharp
private void PutApiSchema(BedrockAgentActionGroupsApiSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `PutFunctionSchema` <a name="PutFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema"></a>

```csharp
private void PutFunctionSchema(BedrockAgentActionGroupsFunctionSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `ResetActionGroupExecutor` <a name="ResetActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor"></a>

```csharp
private void ResetActionGroupExecutor()
```

##### `ResetActionGroupName` <a name="ResetActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName"></a>

```csharp
private void ResetActionGroupName()
```

##### `ResetActionGroupState` <a name="ResetActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState"></a>

```csharp
private void ResetActionGroupState()
```

##### `ResetApiSchema` <a name="ResetApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema"></a>

```csharp
private void ResetApiSchema()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFunctionSchema` <a name="ResetFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema"></a>

```csharp
private void ResetFunctionSchema()
```

##### `ResetParentActionGroupSignature` <a name="ResetParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature"></a>

```csharp
private void ResetParentActionGroupSignature()
```

##### `ResetSkipResourceInUseCheckOnDelete` <a name="ResetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete"></a>

```csharp
private void ResetSkipResourceInUseCheckOnDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor">ActionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema">FunctionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput">ActionGroupExecutorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput">ActionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput">ActionGroupStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput">ApiSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput">FunctionSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput">ParentActionGroupSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput">SkipResourceInUseCheckOnDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName">ActionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState">ActionGroupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature">ParentActionGroupSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionGroupExecutor`<sup>Required</sup> <a name="ActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor"></a>

```csharp
public BedrockAgentActionGroupsActionGroupExecutorOutputReference ActionGroupExecutor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a>

---

##### `ApiSchema`<sup>Required</sup> <a name="ApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema"></a>

```csharp
public BedrockAgentActionGroupsApiSchemaOutputReference ApiSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a>

---

##### `FunctionSchema`<sup>Required</sup> <a name="FunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema"></a>

```csharp
public BedrockAgentActionGroupsFunctionSchemaOutputReference FunctionSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a>

---

##### `ActionGroupExecutorInput`<sup>Optional</sup> <a name="ActionGroupExecutorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsActionGroupExecutor ActionGroupExecutorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `ActionGroupNameInput`<sup>Optional</sup> <a name="ActionGroupNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput"></a>

```csharp
public string ActionGroupNameInput { get; }
```

- *Type:* string

---

##### `ActionGroupStateInput`<sup>Optional</sup> <a name="ActionGroupStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput"></a>

```csharp
public string ActionGroupStateInput { get; }
```

- *Type:* string

---

##### `ApiSchemaInput`<sup>Optional</sup> <a name="ApiSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsApiSchema ApiSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FunctionSchemaInput`<sup>Optional</sup> <a name="FunctionSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput"></a>

```csharp
public IResolvable|BedrockAgentActionGroupsFunctionSchema FunctionSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `ParentActionGroupSignatureInput`<sup>Optional</sup> <a name="ParentActionGroupSignatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput"></a>

```csharp
public string ParentActionGroupSignatureInput { get; }
```

- *Type:* string

---

##### `SkipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput"></a>

```csharp
public bool|IResolvable SkipResourceInUseCheckOnDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ActionGroupName`<sup>Required</sup> <a name="ActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName"></a>

```csharp
public string ActionGroupName { get; }
```

- *Type:* string

---

##### `ActionGroupState`<sup>Required</sup> <a name="ActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState"></a>

```csharp
public string ActionGroupState { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ParentActionGroupSignature`<sup>Required</sup> <a name="ParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature"></a>

```csharp
public string ParentActionGroupSignature { get; }
```

- *Type:* string

---

##### `SkipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete"></a>

```csharp
public bool|IResolvable SkipResourceInUseCheckOnDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentActionGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups">BedrockAgentActionGroups</a>

---


### BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference <a name="BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn">ResetAliasArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAliasArn` <a name="ResetAliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn"></a>

```csharp
private void ResetAliasArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput">AliasArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn">AliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasArnInput`<sup>Optional</sup> <a name="AliasArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput"></a>

```csharp
public string AliasArnInput { get; }
```

- *Type:* string

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn"></a>

```csharp
public string AliasArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentAgentCollaboratorsAgentDescriptor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---


### BedrockAgentAgentCollaboratorsList <a name="BedrockAgentAgentCollaboratorsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAgentCollaboratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get"></a>

```csharp
private BedrockAgentAgentCollaboratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentAgentCollaborators[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>[]

---


### BedrockAgentAgentCollaboratorsOutputReference <a name="BedrockAgentAgentCollaboratorsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAgentCollaboratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor">PutAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor">ResetAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction">ResetCollaborationInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName">ResetCollaboratorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory">ResetRelayConversationHistory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentDescriptor` <a name="PutAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor"></a>

```csharp
private void PutAgentDescriptor(BedrockAgentAgentCollaboratorsAgentDescriptor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `ResetAgentDescriptor` <a name="ResetAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor"></a>

```csharp
private void ResetAgentDescriptor()
```

##### `ResetCollaborationInstruction` <a name="ResetCollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction"></a>

```csharp
private void ResetCollaborationInstruction()
```

##### `ResetCollaboratorName` <a name="ResetCollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName"></a>

```csharp
private void ResetCollaboratorName()
```

##### `ResetRelayConversationHistory` <a name="ResetRelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory"></a>

```csharp
private void ResetRelayConversationHistory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor">AgentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput">AgentDescriptorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput">CollaborationInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput">CollaboratorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput">RelayConversationHistoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName">CollaboratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentDescriptor`<sup>Required</sup> <a name="AgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor"></a>

```csharp
public BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference AgentDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a>

---

##### `AgentDescriptorInput`<sup>Optional</sup> <a name="AgentDescriptorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput"></a>

```csharp
public IResolvable|BedrockAgentAgentCollaboratorsAgentDescriptor AgentDescriptorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `CollaborationInstructionInput`<sup>Optional</sup> <a name="CollaborationInstructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput"></a>

```csharp
public string CollaborationInstructionInput { get; }
```

- *Type:* string

---

##### `CollaboratorNameInput`<sup>Optional</sup> <a name="CollaboratorNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput"></a>

```csharp
public string CollaboratorNameInput { get; }
```

- *Type:* string

---

##### `RelayConversationHistoryInput`<sup>Optional</sup> <a name="RelayConversationHistoryInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput"></a>

```csharp
public string RelayConversationHistoryInput { get; }
```

- *Type:* string

---

##### `CollaborationInstruction`<sup>Required</sup> <a name="CollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction"></a>

```csharp
public string CollaborationInstruction { get; }
```

- *Type:* string

---

##### `CollaboratorName`<sup>Required</sup> <a name="CollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName"></a>

```csharp
public string CollaboratorName { get; }
```

- *Type:* string

---

##### `RelayConversationHistory`<sup>Required</sup> <a name="RelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory"></a>

```csharp
public string RelayConversationHistory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentAgentCollaborators InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators">BedrockAgentAgentCollaborators</a>

---


### BedrockAgentCustomOrchestrationExecutorOutputReference <a name="BedrockAgentCustomOrchestrationExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentCustomOrchestrationExecutorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda"></a>

```csharp
private void ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda">Lambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput"></a>

```csharp
public string LambdaInput { get; }
```

- *Type:* string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda"></a>

```csharp
public string Lambda { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentCustomOrchestrationExecutor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---


### BedrockAgentCustomOrchestrationOutputReference <a name="BedrockAgentCustomOrchestrationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentCustomOrchestrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor">PutExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor">ResetExecutor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutor` <a name="PutExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor"></a>

```csharp
private void PutExecutor(BedrockAgentCustomOrchestrationExecutor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `ResetExecutor` <a name="ResetExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor"></a>

```csharp
private void ResetExecutor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor">Executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput">ExecutorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Executor`<sup>Required</sup> <a name="Executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor"></a>

```csharp
public BedrockAgentCustomOrchestrationExecutorOutputReference Executor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a>

---

##### `ExecutorInput`<sup>Optional</sup> <a name="ExecutorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput"></a>

```csharp
public IResolvable|BedrockAgentCustomOrchestrationExecutor ExecutorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentCustomOrchestration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---


### BedrockAgentGuardrailConfigurationOutputReference <a name="BedrockAgentGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentGuardrailConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier">ResetGuardrailIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion">ResetGuardrailVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGuardrailIdentifier` <a name="ResetGuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier"></a>

```csharp
private void ResetGuardrailIdentifier()
```

##### `ResetGuardrailVersion` <a name="ResetGuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion"></a>

```csharp
private void ResetGuardrailVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput">GuardrailIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput">GuardrailVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion">GuardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuardrailIdentifierInput`<sup>Optional</sup> <a name="GuardrailIdentifierInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput"></a>

```csharp
public string GuardrailIdentifierInput { get; }
```

- *Type:* string

---

##### `GuardrailVersionInput`<sup>Optional</sup> <a name="GuardrailVersionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput"></a>

```csharp
public string GuardrailVersionInput { get; }
```

- *Type:* string

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```csharp
public string GuardrailIdentifier { get; }
```

- *Type:* string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```csharp
public string GuardrailVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentGuardrailConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---


### BedrockAgentKnowledgeBasesList <a name="BedrockAgentKnowledgeBasesList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentKnowledgeBasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get"></a>

```csharp
private BedrockAgentKnowledgeBasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentKnowledgeBases[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>[]

---


### BedrockAgentKnowledgeBasesOutputReference <a name="BedrockAgentKnowledgeBasesOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentKnowledgeBasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId">ResetKnowledgeBaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState">ResetKnowledgeBaseState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKnowledgeBaseId` <a name="ResetKnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId"></a>

```csharp
private void ResetKnowledgeBaseId()
```

##### `ResetKnowledgeBaseState` <a name="ResetKnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState"></a>

```csharp
private void ResetKnowledgeBaseState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput">KnowledgeBaseStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState">KnowledgeBaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput"></a>

```csharp
public string KnowledgeBaseIdInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseStateInput`<sup>Optional</sup> <a name="KnowledgeBaseStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput"></a>

```csharp
public string KnowledgeBaseStateInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `KnowledgeBaseState`<sup>Required</sup> <a name="KnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState"></a>

```csharp
public string KnowledgeBaseState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentKnowledgeBases InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases">BedrockAgentKnowledgeBases</a>

---


### BedrockAgentMemoryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentMemoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration">PutSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes">ResetEnabledMemoryTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration">ResetSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays">ResetStorageDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionSummaryConfiguration` <a name="PutSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration"></a>

```csharp
private void PutSessionSummaryConfiguration(BedrockAgentMemoryConfigurationSessionSummaryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `ResetEnabledMemoryTypes` <a name="ResetEnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes"></a>

```csharp
private void ResetEnabledMemoryTypes()
```

##### `ResetSessionSummaryConfiguration` <a name="ResetSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration"></a>

```csharp
private void ResetSessionSummaryConfiguration()
```

##### `ResetStorageDays` <a name="ResetStorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays"></a>

```csharp
private void ResetStorageDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration">SessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput">EnabledMemoryTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput">SessionSummaryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput">StorageDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">EnabledMemoryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays">StorageDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionSummaryConfiguration`<sup>Required</sup> <a name="SessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration"></a>

```csharp
public BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference SessionSummaryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a>

---

##### `EnabledMemoryTypesInput`<sup>Optional</sup> <a name="EnabledMemoryTypesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput"></a>

```csharp
public string[] EnabledMemoryTypesInput { get; }
```

- *Type:* string[]

---

##### `SessionSummaryConfigurationInput`<sup>Optional</sup> <a name="SessionSummaryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput"></a>

```csharp
public IResolvable|BedrockAgentMemoryConfigurationSessionSummaryConfiguration SessionSummaryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `StorageDaysInput`<sup>Optional</sup> <a name="StorageDaysInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput"></a>

```csharp
public double StorageDaysInput { get; }
```

- *Type:* double

---

##### `EnabledMemoryTypes`<sup>Required</sup> <a name="EnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```csharp
public string[] EnabledMemoryTypes { get; }
```

- *Type:* string[]

---

##### `StorageDays`<sup>Required</sup> <a name="StorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```csharp
public double StorageDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentMemoryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---


### BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions">ResetMaxRecentSessions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRecentSessions` <a name="ResetMaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions"></a>

```csharp
private void ResetMaxRecentSessions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput">MaxRecentSessionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions">MaxRecentSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRecentSessionsInput`<sup>Optional</sup> <a name="MaxRecentSessionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput"></a>

```csharp
public double MaxRecentSessionsInput { get; }
```

- *Type:* double

---

##### `MaxRecentSessions`<sup>Required</sup> <a name="MaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions"></a>

```csharp
public double MaxRecentSessions { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentMemoryConfigurationSessionSummaryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentPromptOverrideConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">PutPromptConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">ResetOverrideLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">ResetPromptConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPromptConfigurations` <a name="PutPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```csharp
private void PutPromptConfigurations(IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---

##### `ResetOverrideLambda` <a name="ResetOverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```csharp
private void ResetOverrideLambda()
```

##### `ResetPromptConfigurations` <a name="ResetPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```csharp
private void ResetPromptConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">PromptConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">OverrideLambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">PromptConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">OverrideLambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PromptConfigurations`<sup>Required</sup> <a name="PromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```csharp
public BedrockAgentPromptOverrideConfigurationPromptConfigurationsList PromptConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `OverrideLambdaInput`<sup>Optional</sup> <a name="OverrideLambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```csharp
public string OverrideLambdaInput { get; }
```

- *Type:* string

---

##### `PromptConfigurationsInput`<sup>Optional</sup> <a name="PromptConfigurationsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurations[] PromptConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---

##### `OverrideLambda`<sup>Required</sup> <a name="OverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```csharp
public string OverrideLambda { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength">ResetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">ResetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumLength` <a name="ResetMaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength"></a>

```csharp
private void ResetMaximumLength()
```

##### `ResetStopSequences` <a name="ResetStopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```csharp
private void ResetStopSequences()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```csharp
private void ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```csharp
private void ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput">MaximumLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">StopSequencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">TopKInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">TopPInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength">MaximumLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">StopSequences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">TopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumLengthInput`<sup>Optional</sup> <a name="MaximumLengthInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput"></a>

```csharp
public double MaximumLengthInput { get; }
```

- *Type:* double

---

##### `StopSequencesInput`<sup>Optional</sup> <a name="StopSequencesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```csharp
public string[] StopSequencesInput { get; }
```

- *Type:* string[]

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```csharp
public double TopKInput { get; }
```

- *Type:* double

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```csharp
public double TopPInput { get; }
```

- *Type:* double

---

##### `MaximumLength`<sup>Required</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength"></a>

```csharp
public double MaximumLength { get; }
```

- *Type:* double

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```csharp
public string[] StopSequences { get; }
```

- *Type:* string[]

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```csharp
public double TopK { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentPromptOverrideConfigurationPromptConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```csharp
private BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">PutInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields">ResetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">ResetBasePromptTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel">ResetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">ResetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">ResetParserMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">ResetPromptCreationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">ResetPromptState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">ResetPromptType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInferenceConfiguration` <a name="PutInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```csharp
private void PutInferenceConfiguration(BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `ResetAdditionalModelRequestFields` <a name="ResetAdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields"></a>

```csharp
private void ResetAdditionalModelRequestFields()
```

##### `ResetBasePromptTemplate` <a name="ResetBasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```csharp
private void ResetBasePromptTemplate()
```

##### `ResetFoundationModel` <a name="ResetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel"></a>

```csharp
private void ResetFoundationModel()
```

##### `ResetInferenceConfiguration` <a name="ResetInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```csharp
private void ResetInferenceConfiguration()
```

##### `ResetParserMode` <a name="ResetParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```csharp
private void ResetParserMode()
```

##### `ResetPromptCreationMode` <a name="ResetPromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```csharp
private void ResetPromptCreationMode()
```

##### `ResetPromptState` <a name="ResetPromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```csharp
private void ResetPromptState()
```

##### `ResetPromptType` <a name="ResetPromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```csharp
private void ResetPromptType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput">AdditionalModelRequestFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">BasePromptTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput">FoundationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">InferenceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">ParserModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">PromptCreationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">PromptStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">PromptTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">BasePromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel">FoundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">ParserMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">PromptCreationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">PromptState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">PromptType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```csharp
public BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference InferenceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a>

---

##### `AdditionalModelRequestFieldsInput`<sup>Optional</sup> <a name="AdditionalModelRequestFieldsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput"></a>

```csharp
public string AdditionalModelRequestFieldsInput { get; }
```

- *Type:* string

---

##### `BasePromptTemplateInput`<sup>Optional</sup> <a name="BasePromptTemplateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```csharp
public string BasePromptTemplateInput { get; }
```

- *Type:* string

---

##### `FoundationModelInput`<sup>Optional</sup> <a name="FoundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput"></a>

```csharp
public string FoundationModelInput { get; }
```

- *Type:* string

---

##### `InferenceConfigurationInput`<sup>Optional</sup> <a name="InferenceConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration InferenceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `ParserModeInput`<sup>Optional</sup> <a name="ParserModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```csharp
public string ParserModeInput { get; }
```

- *Type:* string

---

##### `PromptCreationModeInput`<sup>Optional</sup> <a name="PromptCreationModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```csharp
public string PromptCreationModeInput { get; }
```

- *Type:* string

---

##### `PromptStateInput`<sup>Optional</sup> <a name="PromptStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```csharp
public string PromptStateInput { get; }
```

- *Type:* string

---

##### `PromptTypeInput`<sup>Optional</sup> <a name="PromptTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```csharp
public string PromptTypeInput { get; }
```

- *Type:* string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields"></a>

```csharp
public string AdditionalModelRequestFields { get; }
```

- *Type:* string

---

##### `BasePromptTemplate`<sup>Required</sup> <a name="BasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```csharp
public string BasePromptTemplate { get; }
```

- *Type:* string

---

##### `FoundationModel`<sup>Required</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel"></a>

```csharp
public string FoundationModel { get; }
```

- *Type:* string

---

##### `ParserMode`<sup>Required</sup> <a name="ParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```csharp
public string ParserMode { get; }
```

- *Type:* string

---

##### `PromptCreationMode`<sup>Required</sup> <a name="PromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```csharp
public string PromptCreationMode { get; }
```

- *Type:* string

---

##### `PromptState`<sup>Required</sup> <a name="PromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```csharp
public string PromptState { get; }
```

- *Type:* string

---

##### `PromptType`<sup>Required</sup> <a name="PromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```csharp
public string PromptType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentPromptOverrideConfigurationPromptConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations">BedrockAgentPromptOverrideConfigurationPromptConfigurations</a>

---



