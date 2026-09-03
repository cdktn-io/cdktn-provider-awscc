# `ssmincidentsResponsePlan` Submodule <a name="`ssmincidentsResponsePlan` Submodule" id="@cdktn/provider-awscc.ssmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsResponsePlan <a name="SsmincidentsResponsePlan" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlan(Construct Scope, string Id, SsmincidentsResponsePlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel">PutChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate">PutIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations">PutIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel">ResetChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements">ResetEngagements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations">ResetIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions"></a>

```csharp
private void PutActions(IResolvable|SsmincidentsResponsePlanActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>[]

---

##### `PutChatChannel` <a name="PutChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel"></a>

```csharp
private void PutChatChannel(SsmincidentsResponsePlanChatChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---

##### `PutIncidentTemplate` <a name="PutIncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate"></a>

```csharp
private void PutIncidentTemplate(SsmincidentsResponsePlanIncidentTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `PutIntegrations` <a name="PutIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations"></a>

```csharp
private void PutIntegrations(IResolvable|SsmincidentsResponsePlanIntegrations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags"></a>

```csharp
private void PutTags(IResolvable|SsmincidentsResponsePlanTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>[]

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetChatChannel` <a name="ResetChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel"></a>

```csharp
private void ResetChatChannel()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEngagements` <a name="ResetEngagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements"></a>

```csharp
private void ResetEngagements()
```

##### `ResetIntegrations` <a name="ResetIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations"></a>

```csharp
private void ResetIntegrations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmincidentsResponsePlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmincidentsResponsePlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmincidentsResponsePlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmincidentsResponsePlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmincidentsResponsePlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel">ChatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate">IncidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations">Integrations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput">ChatChannelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput">EngagementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput">IncidentTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput">IntegrationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements">Engagements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions"></a>

```csharp
public SsmincidentsResponsePlanActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChatChannel`<sup>Required</sup> <a name="ChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel"></a>

```csharp
public SsmincidentsResponsePlanChatChannelOutputReference ChatChannel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncidentTemplate`<sup>Required</sup> <a name="IncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate"></a>

```csharp
public SsmincidentsResponsePlanIncidentTemplateOutputReference IncidentTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `Integrations`<sup>Required</sup> <a name="Integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations"></a>

```csharp
public SsmincidentsResponsePlanIntegrationsList Integrations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags"></a>

```csharp
public SsmincidentsResponsePlanTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActions[] ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>[]

---

##### `ChatChannelInput`<sup>Optional</sup> <a name="ChatChannelInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanChatChannel ChatChannelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EngagementsInput`<sup>Optional</sup> <a name="EngagementsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput"></a>

```csharp
public string[] EngagementsInput { get; }
```

- *Type:* string[]

---

##### `IncidentTemplateInput`<sup>Optional</sup> <a name="IncidentTemplateInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplate IncidentTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `IntegrationsInput`<sup>Optional</sup> <a name="IntegrationsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrations[] IntegrationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Engagements`<sup>Required</sup> <a name="Engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements"></a>

```csharp
public string[] Engagements { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsResponsePlanActions <a name="SsmincidentsResponsePlanActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActions {
    SsmincidentsResponsePlanActionsSsmAutomation SsmAutomation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation">SsmAutomation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | The configuration to use when starting the SSM automation document. |

---

##### `SsmAutomation`<sup>Optional</sup> <a name="SsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation"></a>

```csharp
public SsmincidentsResponsePlanActionsSsmAutomation SsmAutomation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

The configuration to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

### SsmincidentsResponsePlanActionsSsmAutomation <a name="SsmincidentsResponsePlanActionsSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomation {
    string DocumentName = null,
    string DocumentVersion = null,
    IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] DynamicParameters = null,
    IResolvable|SsmincidentsResponsePlanActionsSsmAutomationParameters[] Parameters = null,
    string RoleArn = null,
    string TargetAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName">DocumentName</a></code> | <code>string</code> | The document name to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | The version of the document to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters">DynamicParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>[]</code> | The parameters with dynamic values to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>[]</code> | The parameters to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn">RoleArn</a></code> | <code>string</code> | The role ARN to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount">TargetAccount</a></code> | <code>string</code> | The account type to use when starting the SSM automation document. |

---

##### `DocumentName`<sup>Optional</sup> <a name="DocumentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName"></a>

```csharp
public string DocumentName { get; set; }
```

- *Type:* string

The document name to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; set; }
```

- *Type:* string

The version of the document to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}

---

##### `DynamicParameters`<sup>Optional</sup> <a name="DynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] DynamicParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>[]

The parameters with dynamic values to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>[]

The parameters to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#parameters SsmincidentsResponsePlan#parameters}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The role ARN to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}

---

##### `TargetAccount`<sup>Optional</sup> <a name="TargetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount"></a>

```csharp
public string TargetAccount { get; set; }
```

- *Type:* string

The account type to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters {
    string Key = null,
    SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | Value of the dynamic parameter to set when starting the SSM automation document. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value"></a>

```csharp
public SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue Value { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

Value of the dynamic parameter to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue {
    string Variable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable">Variable</a></code> | <code>string</code> | The variable types used as dynamic parameter value when starting the SSM automation document. |

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

The variable types used as dynamic parameter value when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#variable SsmincidentsResponsePlan#variable}

---

### SsmincidentsResponsePlanActionsSsmAutomationParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationParameters {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}.

---

### SsmincidentsResponsePlanChatChannel <a name="SsmincidentsResponsePlanChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanChatChannel {
    string[] ChatbotSns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns">ChatbotSns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}. |

---

##### `ChatbotSns`<sup>Optional</sup> <a name="ChatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns"></a>

```csharp
public string[] ChatbotSns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}.

---

### SsmincidentsResponsePlanConfig <a name="SsmincidentsResponsePlanConfig" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SsmincidentsResponsePlanIncidentTemplate IncidentTemplate,
    string Name,
    IResolvable|SsmincidentsResponsePlanActions[] Actions = null,
    SsmincidentsResponsePlanChatChannel ChatChannel = null,
    string DisplayName = null,
    string[] Engagements = null,
    IResolvable|SsmincidentsResponsePlanIntegrations[] Integrations = null,
    IResolvable|SsmincidentsResponsePlanTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate">IncidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | The incident template configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name">Name</a></code> | <code>string</code> | The name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions">Actions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>[]</code> | The list of actions. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel">ChatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | The chat channel configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements">Engagements</a></code> | <code>string[]</code> | The list of engagements to use. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations">Integrations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>[]</code> | The list of integrations. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>[]</code> | The tags to apply to the response plan. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IncidentTemplate`<sup>Required</sup> <a name="IncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate"></a>

```csharp
public SsmincidentsResponsePlanIncidentTemplate IncidentTemplate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

The incident template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActions[] Actions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>[]

The list of actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#actions SsmincidentsResponsePlan#actions}

---

##### `ChatChannel`<sup>Optional</sup> <a name="ChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel"></a>

```csharp
public SsmincidentsResponsePlanChatChannel ChatChannel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

The chat channel configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}

---

##### `Engagements`<sup>Optional</sup> <a name="Engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements"></a>

```csharp
public string[] Engagements { get; set; }
```

- *Type:* string[]

The list of engagements to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}

---

##### `Integrations`<sup>Optional</sup> <a name="Integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrations[] Integrations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>[]

The list of integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#integrations SsmincidentsResponsePlan#integrations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>[]

The tags to apply to the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}

---

### SsmincidentsResponsePlanIncidentTemplate <a name="SsmincidentsResponsePlanIncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplate {
    double Impact,
    string Title,
    string DedupeString = null,
    IResolvable|SsmincidentsResponsePlanIncidentTemplateIncidentTags[] IncidentTags = null,
    IResolvable|SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] NotificationTargets = null,
    string Summary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact">Impact</a></code> | <code>double</code> | The impact value. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title">Title</a></code> | <code>string</code> | The title string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString">DedupeString</a></code> | <code>string</code> | The deduplication string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags">IncidentTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>[]</code> | Tags that get applied to incidents created by the StartIncident API action. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets">NotificationTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>[]</code> | The list of notification targets. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary">Summary</a></code> | <code>string</code> | The summary string. |

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact"></a>

```csharp
public double Impact { get; set; }
```

- *Type:* double

The impact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}

---

##### `DedupeString`<sup>Optional</sup> <a name="DedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString"></a>

```csharp
public string DedupeString { get; set; }
```

- *Type:* string

The deduplication string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}

---

##### `IncidentTags`<sup>Optional</sup> <a name="IncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateIncidentTags[] IncidentTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>[]

Tags that get applied to incidents created by the StartIncident API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}

---

##### `NotificationTargets`<sup>Optional</sup> <a name="NotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] NotificationTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>[]

The list of notification targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#notification_targets SsmincidentsResponsePlan#notification_targets}

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary"></a>

```csharp
public string Summary { get; set; }
```

- *Type:* string

The summary string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}

---

### SsmincidentsResponsePlanIncidentTemplateIncidentTags <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplateIncidentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

### SsmincidentsResponsePlanIncidentTemplateNotificationTargets <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplateNotificationTargets {
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | The ARN of the Chatbot SNS topic. |

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

The ARN of the Chatbot SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}

---

### SsmincidentsResponsePlanIntegrations <a name="SsmincidentsResponsePlanIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIntegrations {
    SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration PagerDutyConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration">PagerDutyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | The pagerDuty configuration to use when starting the incident. |

---

##### `PagerDutyConfiguration`<sup>Optional</sup> <a name="PagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration"></a>

```csharp
public SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration PagerDutyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

The pagerDuty configuration to use when starting the incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#pager_duty_configuration SsmincidentsResponsePlan#pager_duty_configuration}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration {
    string Name = null,
    SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration PagerDutyIncidentConfiguration = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name">Name</a></code> | <code>string</code> | The name of the pagerDuty configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration">PagerDutyIncidentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | The pagerDuty incident configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId">SecretId</a></code> | <code>string</code> | The AWS secrets manager secretId storing the pagerDuty token. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the pagerDuty configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `PagerDutyIncidentConfiguration`<sup>Optional</sup> <a name="PagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration"></a>

```csharp
public SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration PagerDutyIncidentConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

The pagerDuty incident configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#pager_duty_incident_configuration SsmincidentsResponsePlan#pager_duty_incident_configuration}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The AWS secrets manager secretId storing the pagerDuty token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration {
    string ServiceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId">ServiceId</a></code> | <code>string</code> | The pagerDuty serviceId. |

---

##### `ServiceId`<sup>Optional</sup> <a name="ServiceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

The pagerDuty serviceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}

---

### SsmincidentsResponsePlanTags <a name="SsmincidentsResponsePlanTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsResponsePlanActionsList <a name="SsmincidentsResponsePlanActionsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get"></a>

```csharp
private SsmincidentsResponsePlanActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>[]

---


### SsmincidentsResponsePlanActionsOutputReference <a name="SsmincidentsResponsePlanActionsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation">PutSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation">ResetSsmAutomation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsmAutomation` <a name="PutSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation"></a>

```csharp
private void PutSsmAutomation(SsmincidentsResponsePlanActionsSsmAutomation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---

##### `ResetSsmAutomation` <a name="ResetSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation"></a>

```csharp
private void ResetSsmAutomation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation">SsmAutomation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput">SsmAutomationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SsmAutomation`<sup>Required</sup> <a name="SsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation"></a>

```csharp
public SsmincidentsResponsePlanActionsSsmAutomationOutputReference SsmAutomation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a>

---

##### `SsmAutomationInput`<sup>Optional</sup> <a name="SsmAutomationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomation SsmAutomationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get"></a>

```csharp
private SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>[]

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue"></a>

```csharp
private void PutValue(SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value"></a>

```csharp
public SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue ValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVariable` <a name="ResetVariable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable"></a>

```csharp
private void ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters">PutDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName">ResetDocumentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters">ResetDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount">ResetTargetAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicParameters` <a name="PutDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters"></a>

```csharp
private void PutDynamicParameters(IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>[]

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|SsmincidentsResponsePlanActionsSsmAutomationParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>[]

---

##### `ResetDocumentName` <a name="ResetDocumentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName"></a>

```csharp
private void ResetDocumentName()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion"></a>

```csharp
private void ResetDocumentVersion()
```

##### `ResetDynamicParameters` <a name="ResetDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters"></a>

```csharp
private void ResetDynamicParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTargetAccount` <a name="ResetTargetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount"></a>

```csharp
private void ResetTargetAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters">DynamicParameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput">DocumentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput">DocumentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput">DynamicParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput">TargetAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName">DocumentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount">TargetAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicParameters`<sup>Required</sup> <a name="DynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters"></a>

```csharp
public SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList DynamicParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters"></a>

```csharp
public SsmincidentsResponsePlanActionsSsmAutomationParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a>

---

##### `DocumentNameInput`<sup>Optional</sup> <a name="DocumentNameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput"></a>

```csharp
public string DocumentNameInput { get; }
```

- *Type:* string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput"></a>

```csharp
public string DocumentVersionInput { get; }
```

- *Type:* string

---

##### `DynamicParametersInput`<sup>Optional</sup> <a name="DynamicParametersInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] DynamicParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>[]

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TargetAccountInput`<sup>Optional</sup> <a name="TargetAccountInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput"></a>

```csharp
public string TargetAccountInput { get; }
```

- *Type:* string

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName"></a>

```csharp
public string DocumentName { get; }
```

- *Type:* string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TargetAccount`<sup>Required</sup> <a name="TargetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount"></a>

```csharp
public string TargetAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get"></a>

```csharp
private SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>[]

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>

---


### SsmincidentsResponsePlanChatChannelOutputReference <a name="SsmincidentsResponsePlanChatChannelOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanChatChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns">ResetChatbotSns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChatbotSns` <a name="ResetChatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns"></a>

```csharp
private void ResetChatbotSns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput">ChatbotSnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns">ChatbotSns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChatbotSnsInput`<sup>Optional</sup> <a name="ChatbotSnsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput"></a>

```csharp
public string[] ChatbotSnsInput { get; }
```

- *Type:* string[]

---

##### `ChatbotSns`<sup>Required</sup> <a name="ChatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns"></a>

```csharp
public string[] ChatbotSns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanChatChannel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsList <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplateIncidentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get"></a>

```csharp
private SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateIncidentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>[]

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateIncidentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get"></a>

```csharp
private SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>[]

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateNotificationTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>

---


### SsmincidentsResponsePlanIncidentTemplateOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIncidentTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags">PutIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets">PutNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString">ResetDedupeString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags">ResetIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets">ResetNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncidentTags` <a name="PutIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags"></a>

```csharp
private void PutIncidentTags(IResolvable|SsmincidentsResponsePlanIncidentTemplateIncidentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>[]

---

##### `PutNotificationTargets` <a name="PutNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets"></a>

```csharp
private void PutNotificationTargets(IResolvable|SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>[]

---

##### `ResetDedupeString` <a name="ResetDedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString"></a>

```csharp
private void ResetDedupeString()
```

##### `ResetIncidentTags` <a name="ResetIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags"></a>

```csharp
private void ResetIncidentTags()
```

##### `ResetNotificationTargets` <a name="ResetNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets"></a>

```csharp
private void ResetNotificationTargets()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary"></a>

```csharp
private void ResetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">IncidentTags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets">NotificationTargets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput">DedupeStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput">ImpactInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput">IncidentTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput">NotificationTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput">SummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">DedupeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">Impact</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncidentTags`<sup>Required</sup> <a name="IncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```csharp
public SsmincidentsResponsePlanIncidentTemplateIncidentTagsList IncidentTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a>

---

##### `NotificationTargets`<sup>Required</sup> <a name="NotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets"></a>

```csharp
public SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList NotificationTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a>

---

##### `DedupeStringInput`<sup>Optional</sup> <a name="DedupeStringInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput"></a>

```csharp
public string DedupeStringInput { get; }
```

- *Type:* string

---

##### `ImpactInput`<sup>Optional</sup> <a name="ImpactInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput"></a>

```csharp
public double ImpactInput { get; }
```

- *Type:* double

---

##### `IncidentTagsInput`<sup>Optional</sup> <a name="IncidentTagsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateIncidentTags[] IncidentTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>[]

---

##### `NotificationTargetsInput`<sup>Optional</sup> <a name="NotificationTargetsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] NotificationTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>[]

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput"></a>

```csharp
public string SummaryInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `DedupeString`<sup>Required</sup> <a name="DedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```csharp
public string DedupeString { get; }
```

- *Type:* string

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```csharp
public double Impact { get; }
```

- *Type:* double

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIncidentTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---


### SsmincidentsResponsePlanIntegrationsList <a name="SsmincidentsResponsePlanIntegrationsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIntegrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get"></a>

```csharp
private SsmincidentsResponsePlanIntegrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>[]

---


### SsmincidentsResponsePlanIntegrationsOutputReference <a name="SsmincidentsResponsePlanIntegrationsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration">PutPagerDutyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration">ResetPagerDutyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPagerDutyConfiguration` <a name="PutPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration"></a>

```csharp
private void PutPagerDutyConfiguration(SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---

##### `ResetPagerDutyConfiguration` <a name="ResetPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration"></a>

```csharp
private void ResetPagerDutyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration">PagerDutyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput">PagerDutyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PagerDutyConfiguration`<sup>Required</sup> <a name="PagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration"></a>

```csharp
public SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference PagerDutyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a>

---

##### `PagerDutyConfigurationInput`<sup>Optional</sup> <a name="PagerDutyConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration PagerDutyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration">PutPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration">ResetPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPagerDutyIncidentConfiguration` <a name="PutPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration"></a>

```csharp
private void PutPagerDutyIncidentConfiguration(SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPagerDutyIncidentConfiguration` <a name="ResetPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration"></a>

```csharp
private void ResetPagerDutyIncidentConfiguration()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration">PagerDutyIncidentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput">PagerDutyIncidentConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PagerDutyIncidentConfiguration`<sup>Required</sup> <a name="PagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration"></a>

```csharp
public SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference PagerDutyIncidentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PagerDutyIncidentConfigurationInput`<sup>Optional</sup> <a name="PagerDutyIncidentConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration PagerDutyIncidentConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId">ResetServiceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceId` <a name="ResetServiceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId"></a>

```csharp
private void ResetServiceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---


### SsmincidentsResponsePlanTagsList <a name="SsmincidentsResponsePlanTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get"></a>

```csharp
private SsmincidentsResponsePlanTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>[]

---


### SsmincidentsResponsePlanTagsOutputReference <a name="SsmincidentsResponsePlanTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmincidentsResponsePlanTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsResponsePlanTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>

---



