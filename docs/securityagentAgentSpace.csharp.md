# `securityagentAgentSpace` Submodule <a name="`securityagentAgentSpace` Submodule" id="@cdktn/provider-awscc.securityagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentAgentSpace <a name="SecurityagentAgentSpace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space awscc_securityagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpace(Construct Scope, string Id, SecurityagentAgentSpaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig">SecurityagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig">SecurityagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putAwsResources">PutAwsResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putCodeReviewSettings">PutCodeReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putIntegratedResources">PutIntegratedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetAwsResources">ResetAwsResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetCodeReviewSettings">ResetCodeReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetIntegratedResources">ResetIntegratedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTargetDomainIds">ResetTargetDomainIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsResources` <a name="PutAwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putAwsResources"></a>

```csharp
private void PutAwsResources(SecurityagentAgentSpaceAwsResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putAwsResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

---

##### `PutCodeReviewSettings` <a name="PutCodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putCodeReviewSettings"></a>

```csharp
private void PutCodeReviewSettings(SecurityagentAgentSpaceCodeReviewSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putCodeReviewSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

---

##### `PutIntegratedResources` <a name="PutIntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putIntegratedResources"></a>

```csharp
private void PutIntegratedResources(IResolvable|SecurityagentAgentSpaceIntegratedResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putIntegratedResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putTags"></a>

```csharp
private void PutTags(IResolvable|SecurityagentAgentSpaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>[]

---

##### `ResetAwsResources` <a name="ResetAwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetAwsResources"></a>

```csharp
private void ResetAwsResources()
```

##### `ResetCodeReviewSettings` <a name="ResetCodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetCodeReviewSettings"></a>

```csharp
private void ResetCodeReviewSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIntegratedResources` <a name="ResetIntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetIntegratedResources"></a>

```csharp
private void ResetIntegratedResources()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetDomainIds` <a name="ResetTargetDomainIds" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTargetDomainIds"></a>

```csharp
private void ResetTargetDomainIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentAgentSpace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentAgentSpace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentAgentSpace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentAgentSpace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityagentAgentSpace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.agentSpaceId">AgentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResources">AwsResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference">SecurityagentAgentSpaceAwsResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettings">CodeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference">SecurityagentAgentSpaceCodeReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResources">IntegratedResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList">SecurityagentAgentSpaceIntegratedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList">SecurityagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResourcesInput">AwsResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettingsInput">CodeReviewSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResourcesInput">IntegratedResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIdsInput">TargetDomainIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIds">TargetDomainIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.agentSpaceId"></a>

```csharp
public string AgentSpaceId { get; }
```

- *Type:* string

---

##### `AwsResources`<sup>Required</sup> <a name="AwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResources"></a>

```csharp
public SecurityagentAgentSpaceAwsResourcesOutputReference AwsResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference">SecurityagentAgentSpaceAwsResourcesOutputReference</a>

---

##### `CodeReviewSettings`<sup>Required</sup> <a name="CodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettings"></a>

```csharp
public SecurityagentAgentSpaceCodeReviewSettingsOutputReference CodeReviewSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference">SecurityagentAgentSpaceCodeReviewSettingsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegratedResources`<sup>Required</sup> <a name="IntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResources"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesList IntegratedResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList">SecurityagentAgentSpaceIntegratedResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tags"></a>

```csharp
public SecurityagentAgentSpaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList">SecurityagentAgentSpaceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AwsResourcesInput`<sup>Optional</sup> <a name="AwsResourcesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResourcesInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceAwsResources AwsResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

---

##### `CodeReviewSettingsInput`<sup>Optional</sup> <a name="CodeReviewSettingsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettingsInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceCodeReviewSettings CodeReviewSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IntegratedResourcesInput`<sup>Optional</sup> <a name="IntegratedResourcesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResourcesInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResources[] IntegratedResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>[]

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tagsInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>[]

---

##### `TargetDomainIdsInput`<sup>Optional</sup> <a name="TargetDomainIdsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIdsInput"></a>

```csharp
public string[] TargetDomainIdsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetDomainIds`<sup>Required</sup> <a name="TargetDomainIds" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIds"></a>

```csharp
public string[] TargetDomainIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentAgentSpaceAwsResources <a name="SecurityagentAgentSpaceAwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceAwsResources {
    string[] IamRoles = null,
    string[] LambdaFunctionArns = null,
    string[] LogGroups = null,
    string[] S3Buckets = null,
    string[] SecretArns = null,
    IResolvable|SecurityagentAgentSpaceAwsResourcesVpcs[] Vpcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | IAM role ARNs. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.lambdaFunctionArns">LambdaFunctionArns</a></code> | <code>string[]</code> | Lambda function ARNs used to retrieve tester credentials for pentests. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.logGroups">LogGroups</a></code> | <code>string[]</code> | CloudWatch log group ARNs. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.s3Buckets">S3Buckets</a></code> | <code>string[]</code> | S3 bucket ARNs. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.secretArns">SecretArns</a></code> | <code>string[]</code> | SecretsManager secret ARNs used to store tester credentials for pentests. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.vpcs">Vpcs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>[]</code> | VPC configurations. |

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; set; }
```

- *Type:* string[]

IAM role ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#iam_roles SecurityagentAgentSpace#iam_roles}

---

##### `LambdaFunctionArns`<sup>Optional</sup> <a name="LambdaFunctionArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.lambdaFunctionArns"></a>

```csharp
public string[] LambdaFunctionArns { get; set; }
```

- *Type:* string[]

Lambda function ARNs used to retrieve tester credentials for pentests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#lambda_function_arns SecurityagentAgentSpace#lambda_function_arns}

---

##### `LogGroups`<sup>Optional</sup> <a name="LogGroups" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.logGroups"></a>

```csharp
public string[] LogGroups { get; set; }
```

- *Type:* string[]

CloudWatch log group ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#log_groups SecurityagentAgentSpace#log_groups}

---

##### `S3Buckets`<sup>Optional</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.s3Buckets"></a>

```csharp
public string[] S3Buckets { get; set; }
```

- *Type:* string[]

S3 bucket ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#s3_buckets SecurityagentAgentSpace#s3_buckets}

---

##### `SecretArns`<sup>Optional</sup> <a name="SecretArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.secretArns"></a>

```csharp
public string[] SecretArns { get; set; }
```

- *Type:* string[]

SecretsManager secret ARNs used to store tester credentials for pentests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#secret_arns SecurityagentAgentSpace#secret_arns}

---

##### `Vpcs`<sup>Optional</sup> <a name="Vpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.vpcs"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceAwsResourcesVpcs[] Vpcs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>[]

VPC configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#vpcs SecurityagentAgentSpace#vpcs}

---

### SecurityagentAgentSpaceAwsResourcesVpcs <a name="SecurityagentAgentSpaceAwsResourcesVpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceAwsResourcesVpcs {
    string[] SecurityGroupArns = null,
    string[] SubnetArns = null,
    string VpcArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | List of security group ARNs in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | List of subnet ARNs in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.vpcArn">VpcArn</a></code> | <code>string</code> | ARN of the customer VPC. |

---

##### `SecurityGroupArns`<sup>Optional</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; set; }
```

- *Type:* string[]

List of security group ARNs in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#security_group_arns SecurityagentAgentSpace#security_group_arns}

---

##### `SubnetArns`<sup>Optional</sup> <a name="SubnetArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; set; }
```

- *Type:* string[]

List of subnet ARNs in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#subnet_arns SecurityagentAgentSpace#subnet_arns}

---

##### `VpcArn`<sup>Optional</sup> <a name="VpcArn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.vpcArn"></a>

```csharp
public string VpcArn { get; set; }
```

- *Type:* string

ARN of the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#vpc_arn SecurityagentAgentSpace#vpc_arn}

---

### SecurityagentAgentSpaceCodeReviewSettings <a name="SecurityagentAgentSpaceCodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceCodeReviewSettings {
    bool|IResolvable ControlsScanning = null,
    bool|IResolvable GeneralPurposeScanning = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.controlsScanning">ControlsScanning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Controls are utilized for code review analysis. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.generalPurposeScanning">GeneralPurposeScanning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether general purpose analysis is performed for code review. |

---

##### `ControlsScanning`<sup>Optional</sup> <a name="ControlsScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.controlsScanning"></a>

```csharp
public bool|IResolvable ControlsScanning { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Controls are utilized for code review analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#controls_scanning SecurityagentAgentSpace#controls_scanning}

---

##### `GeneralPurposeScanning`<sup>Optional</sup> <a name="GeneralPurposeScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.generalPurposeScanning"></a>

```csharp
public bool|IResolvable GeneralPurposeScanning { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether general purpose analysis is performed for code review.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#general_purpose_scanning SecurityagentAgentSpace#general_purpose_scanning}

---

### SecurityagentAgentSpaceConfig <a name="SecurityagentAgentSpaceConfig" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    SecurityagentAgentSpaceAwsResources AwsResources = null,
    SecurityagentAgentSpaceCodeReviewSettings CodeReviewSettings = null,
    string Description = null,
    IResolvable|SecurityagentAgentSpaceIntegratedResources[] IntegratedResources = null,
    string KmsKeyId = null,
    IResolvable|SecurityagentAgentSpaceTags[] Tags = null,
    string[] TargetDomainIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.name">Name</a></code> | <code>string</code> | Name of the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.awsResources">AwsResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a></code> | AWS resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.codeReviewSettings">CodeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a></code> | Details of code review settings. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.description">Description</a></code> | <code>string</code> | Description of the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.integratedResources">IntegratedResources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>[]</code> | Integrated Resources configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Identifier of the KMS key used to encrypt data. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>[]</code> | Tags for the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.targetDomainIds">TargetDomainIds</a></code> | <code>string[]</code> | List of target domain identifiers registered with the agent space. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `AwsResources`<sup>Optional</sup> <a name="AwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.awsResources"></a>

```csharp
public SecurityagentAgentSpaceAwsResources AwsResources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

AWS resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#aws_resources SecurityagentAgentSpace#aws_resources}

---

##### `CodeReviewSettings`<sup>Optional</sup> <a name="CodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.codeReviewSettings"></a>

```csharp
public SecurityagentAgentSpaceCodeReviewSettings CodeReviewSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

Details of code review settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#code_review_settings SecurityagentAgentSpace#code_review_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#description SecurityagentAgentSpace#description}

---

##### `IntegratedResources`<sup>Optional</sup> <a name="IntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.integratedResources"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResources[] IntegratedResources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>[]

Integrated Resources configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#integrated_resources SecurityagentAgentSpace#integrated_resources}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Identifier of the KMS key used to encrypt data.

Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#kms_key_id SecurityagentAgentSpace#kms_key_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.tags"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>[]

Tags for the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#tags SecurityagentAgentSpace#tags}

---

##### `TargetDomainIds`<sup>Optional</sup> <a name="TargetDomainIds" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.targetDomainIds"></a>

```csharp
public string[] TargetDomainIds { get; set; }
```

- *Type:* string[]

List of target domain identifiers registered with the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#target_domain_ids SecurityagentAgentSpace#target_domain_ids}

---

### SecurityagentAgentSpaceIntegratedResources <a name="SecurityagentAgentSpaceIntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResources {
    string Integration = null,
    IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResources[] ProviderResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.integration">Integration</a></code> | <code>string</code> | Unique identifier of the Provider Integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.providerResources">ProviderResources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>[]</code> | List of selected Resources from the Integration. |

---

##### `Integration`<sup>Optional</sup> <a name="Integration" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.integration"></a>

```csharp
public string Integration { get; set; }
```

- *Type:* string

Unique identifier of the Provider Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#integration SecurityagentAgentSpace#integration}

---

##### `ProviderResources`<sup>Optional</sup> <a name="ProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.providerResources"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResources[] ProviderResources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>[]

List of selected Resources from the Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#provider_resources SecurityagentAgentSpace#provider_resources}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResources <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResources {
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities BitbucketCapabilities = null,
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository BitbucketRepository = null,
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities ConfluenceCapabilities = null,
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument ConfluenceDocument = null,
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities GitHubCapabilities = null,
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository GitHubRepository = null,
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities GitLabCapabilities = null,
    SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository GitLabRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketCapabilities">BitbucketCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | Bitbucket repository capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketRepository">BitbucketRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | Bitbucket repository details. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceCapabilities">ConfluenceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | Confluence document capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceDocument">ConfluenceDocument</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | Confluence document details. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubCapabilities">GitHubCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | GitHub repository capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubRepository">GitHubRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | GitHub repository details. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabCapabilities">GitLabCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | GitLab repository capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabRepository">GitLabRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | GitLab repository details. |

---

##### `BitbucketCapabilities`<sup>Optional</sup> <a name="BitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities BitbucketCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

Bitbucket repository capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#bitbucket_capabilities SecurityagentAgentSpace#bitbucket_capabilities}

---

##### `BitbucketRepository`<sup>Optional</sup> <a name="BitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketRepository"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository BitbucketRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

Bitbucket repository details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#bitbucket_repository SecurityagentAgentSpace#bitbucket_repository}

---

##### `ConfluenceCapabilities`<sup>Optional</sup> <a name="ConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities ConfluenceCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

Confluence document capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#confluence_capabilities SecurityagentAgentSpace#confluence_capabilities}

---

##### `ConfluenceDocument`<sup>Optional</sup> <a name="ConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceDocument"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument ConfluenceDocument { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

Confluence document details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#confluence_document SecurityagentAgentSpace#confluence_document}

---

##### `GitHubCapabilities`<sup>Optional</sup> <a name="GitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities GitHubCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

GitHub repository capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#git_hub_capabilities SecurityagentAgentSpace#git_hub_capabilities}

---

##### `GitHubRepository`<sup>Optional</sup> <a name="GitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubRepository"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository GitHubRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

GitHub repository details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#git_hub_repository SecurityagentAgentSpace#git_hub_repository}

---

##### `GitLabCapabilities`<sup>Optional</sup> <a name="GitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities GitLabCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

GitLab repository capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#git_lab_capabilities SecurityagentAgentSpace#git_lab_capabilities}

---

##### `GitLabRepository`<sup>Optional</sup> <a name="GitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabRepository"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository GitLabRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

GitLab repository details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#git_lab_repository SecurityagentAgentSpace#git_lab_repository}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities {
    bool|IResolvable LeaveComments = null,
    bool|IResolvable RemediateCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.leaveComments">LeaveComments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables Code Review in the repository. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.remediateCode">RemediateCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables creation of pull requests with automated fixes. |

---

##### `LeaveComments`<sup>Optional</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.leaveComments"></a>

```csharp
public bool|IResolvable LeaveComments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables Code Review in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#leave_comments SecurityagentAgentSpace#leave_comments}

---

##### `RemediateCode`<sup>Optional</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.remediateCode"></a>

```csharp
public bool|IResolvable RemediateCode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables creation of pull requests with automated fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#remediate_code SecurityagentAgentSpace#remediate_code}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository {
    string Name = null,
    string Workspace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.name">Name</a></code> | <code>string</code> | Bitbucket repository name. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.workspace">Workspace</a></code> | <code>string</code> | Bitbucket workspace slug owning the repository. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Bitbucket repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.workspace"></a>

```csharp
public string Workspace { get; set; }
```

- *Type:* string

Bitbucket workspace slug owning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#workspace SecurityagentAgentSpace#workspace}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities {
    bool|IResolvable CreateDocument = null,
    bool|IResolvable FetchDocument = null,
    bool|IResolvable UpdateDocument = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.createDocument">CreateDocument</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables creation of new Confluence documents in the same space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.fetchDocument">FetchDocument</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables read access to the document content. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.updateDocument">UpdateDocument</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables updates to the document. |

---

##### `CreateDocument`<sup>Optional</sup> <a name="CreateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.createDocument"></a>

```csharp
public bool|IResolvable CreateDocument { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables creation of new Confluence documents in the same space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#create_document SecurityagentAgentSpace#create_document}

---

##### `FetchDocument`<sup>Optional</sup> <a name="FetchDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.fetchDocument"></a>

```csharp
public bool|IResolvable FetchDocument { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables read access to the document content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#fetch_document SecurityagentAgentSpace#fetch_document}

---

##### `UpdateDocument`<sup>Optional</sup> <a name="UpdateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.updateDocument"></a>

```csharp
public bool|IResolvable UpdateDocument { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables updates to the document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#update_document SecurityagentAgentSpace#update_document}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument {
    string Name = null,
    string PageId = null,
    string SpaceKey = null,
    string SpaceTitle = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.name">Name</a></code> | <code>string</code> | Customer-supplied logical name for the Confluence document. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.pageId">PageId</a></code> | <code>string</code> | Confluence page identifier. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceKey">SpaceKey</a></code> | <code>string</code> | Confluence space key containing the document. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceTitle">SpaceTitle</a></code> | <code>string</code> | Read-only human-readable title of the containing space, populated from service-side metadata. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.title">Title</a></code> | <code>string</code> | Read-only human-readable title of the page, populated from service-side metadata. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Customer-supplied logical name for the Confluence document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `PageId`<sup>Optional</sup> <a name="PageId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.pageId"></a>

```csharp
public string PageId { get; set; }
```

- *Type:* string

Confluence page identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#page_id SecurityagentAgentSpace#page_id}

---

##### `SpaceKey`<sup>Optional</sup> <a name="SpaceKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceKey"></a>

```csharp
public string SpaceKey { get; set; }
```

- *Type:* string

Confluence space key containing the document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#space_key SecurityagentAgentSpace#space_key}

---

##### `SpaceTitle`<sup>Optional</sup> <a name="SpaceTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceTitle"></a>

```csharp
public string SpaceTitle { get; set; }
```

- *Type:* string

Read-only human-readable title of the containing space, populated from service-side metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#space_title SecurityagentAgentSpace#space_title}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Read-only human-readable title of the page, populated from service-side metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#title SecurityagentAgentSpace#title}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities {
    bool|IResolvable LeaveComments = null,
    bool|IResolvable RemediateCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.leaveComments">LeaveComments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables Code Review in the repository. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.remediateCode">RemediateCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables creation of pull requests with automated fixes. |

---

##### `LeaveComments`<sup>Optional</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.leaveComments"></a>

```csharp
public bool|IResolvable LeaveComments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables Code Review in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#leave_comments SecurityagentAgentSpace#leave_comments}

---

##### `RemediateCode`<sup>Optional</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.remediateCode"></a>

```csharp
public bool|IResolvable RemediateCode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables creation of pull requests with automated fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#remediate_code SecurityagentAgentSpace#remediate_code}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository {
    string Name = null,
    string Owner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.name">Name</a></code> | <code>string</code> | GitHub repository name. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.owner">Owner</a></code> | <code>string</code> | GitHub repository owner (user or organization). |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

GitHub repository owner (user or organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#owner SecurityagentAgentSpace#owner}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities {
    bool|IResolvable LeaveComments = null,
    bool|IResolvable RemediateCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.leaveComments">LeaveComments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables Code Review in the repository. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.remediateCode">RemediateCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables creation of merge requests with automated fixes. |

---

##### `LeaveComments`<sup>Optional</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.leaveComments"></a>

```csharp
public bool|IResolvable LeaveComments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables Code Review in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#leave_comments SecurityagentAgentSpace#leave_comments}

---

##### `RemediateCode`<sup>Optional</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.remediateCode"></a>

```csharp
public bool|IResolvable RemediateCode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables creation of merge requests with automated fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#remediate_code SecurityagentAgentSpace#remediate_code}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository {
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.name">Name</a></code> | <code>string</code> | GitLab project name. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.namespace">Namespace</a></code> | <code>string</code> | GitLab project namespace (user, group, or subgroup path). |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

GitLab project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

GitLab project namespace (user, group, or subgroup path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#namespace SecurityagentAgentSpace#namespace}

---

### SecurityagentAgentSpaceTags <a name="SecurityagentAgentSpaceTags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#key SecurityagentAgentSpace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_agent_space#value SecurityagentAgentSpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentAgentSpaceAwsResourcesOutputReference <a name="SecurityagentAgentSpaceAwsResourcesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceAwsResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.putVpcs">PutVpcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLambdaFunctionArns">ResetLambdaFunctionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLogGroups">ResetLogGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetS3Buckets">ResetS3Buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetSecretArns">ResetSecretArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetVpcs">ResetVpcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcs` <a name="PutVpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.putVpcs"></a>

```csharp
private void PutVpcs(IResolvable|SecurityagentAgentSpaceAwsResourcesVpcs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.putVpcs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>[]

---

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```

##### `ResetLambdaFunctionArns` <a name="ResetLambdaFunctionArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLambdaFunctionArns"></a>

```csharp
private void ResetLambdaFunctionArns()
```

##### `ResetLogGroups` <a name="ResetLogGroups" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLogGroups"></a>

```csharp
private void ResetLogGroups()
```

##### `ResetS3Buckets` <a name="ResetS3Buckets" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetS3Buckets"></a>

```csharp
private void ResetS3Buckets()
```

##### `ResetSecretArns` <a name="ResetSecretArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetSecretArns"></a>

```csharp
private void ResetSecretArns()
```

##### `ResetVpcs` <a name="ResetVpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetVpcs"></a>

```csharp
private void ResetVpcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs">Vpcs</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList">SecurityagentAgentSpaceAwsResourcesVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRolesInput">IamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArnsInput">LambdaFunctionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroupsInput">LogGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3BucketsInput">S3BucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArnsInput">SecretArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcsInput">VpcsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns">LambdaFunctionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups">LogGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets">S3Buckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns">SecretArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Vpcs`<sup>Required</sup> <a name="Vpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs"></a>

```csharp
public SecurityagentAgentSpaceAwsResourcesVpcsList Vpcs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList">SecurityagentAgentSpaceAwsResourcesVpcsList</a>

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRolesInput"></a>

```csharp
public string[] IamRolesInput { get; }
```

- *Type:* string[]

---

##### `LambdaFunctionArnsInput`<sup>Optional</sup> <a name="LambdaFunctionArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArnsInput"></a>

```csharp
public string[] LambdaFunctionArnsInput { get; }
```

- *Type:* string[]

---

##### `LogGroupsInput`<sup>Optional</sup> <a name="LogGroupsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroupsInput"></a>

```csharp
public string[] LogGroupsInput { get; }
```

- *Type:* string[]

---

##### `S3BucketsInput`<sup>Optional</sup> <a name="S3BucketsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3BucketsInput"></a>

```csharp
public string[] S3BucketsInput { get; }
```

- *Type:* string[]

---

##### `SecretArnsInput`<sup>Optional</sup> <a name="SecretArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArnsInput"></a>

```csharp
public string[] SecretArnsInput { get; }
```

- *Type:* string[]

---

##### `VpcsInput`<sup>Optional</sup> <a name="VpcsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcsInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceAwsResourcesVpcs[] VpcsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>[]

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `LambdaFunctionArns`<sup>Required</sup> <a name="LambdaFunctionArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns"></a>

```csharp
public string[] LambdaFunctionArns { get; }
```

- *Type:* string[]

---

##### `LogGroups`<sup>Required</sup> <a name="LogGroups" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups"></a>

```csharp
public string[] LogGroups { get; }
```

- *Type:* string[]

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets"></a>

```csharp
public string[] S3Buckets { get; }
```

- *Type:* string[]

---

##### `SecretArns`<sup>Required</sup> <a name="SecretArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns"></a>

```csharp
public string[] SecretArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceAwsResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

---


### SecurityagentAgentSpaceAwsResourcesVpcsList <a name="SecurityagentAgentSpaceAwsResourcesVpcsList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceAwsResourcesVpcsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.get"></a>

```csharp
private SecurityagentAgentSpaceAwsResourcesVpcsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceAwsResourcesVpcs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>[]

---


### SecurityagentAgentSpaceAwsResourcesVpcsOutputReference <a name="SecurityagentAgentSpaceAwsResourcesVpcsOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceAwsResourcesVpcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSecurityGroupArns">ResetSecurityGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSubnetArns">ResetSubnetArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetVpcArn">ResetVpcArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupArns` <a name="ResetSecurityGroupArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSecurityGroupArns"></a>

```csharp
private void ResetSecurityGroupArns()
```

##### `ResetSubnetArns` <a name="ResetSubnetArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSubnetArns"></a>

```csharp
private void ResetSubnetArns()
```

##### `ResetVpcArn` <a name="ResetVpcArn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetVpcArn"></a>

```csharp
private void ResetVpcArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArnsInput">SubnetArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArnInput">VpcArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn">VpcArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArnsInput"></a>

```csharp
public string[] SecurityGroupArnsInput { get; }
```

- *Type:* string[]

---

##### `SubnetArnsInput`<sup>Optional</sup> <a name="SubnetArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArnsInput"></a>

```csharp
public string[] SubnetArnsInput { get; }
```

- *Type:* string[]

---

##### `VpcArnInput`<sup>Optional</sup> <a name="VpcArnInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArnInput"></a>

```csharp
public string VpcArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; }
```

- *Type:* string[]

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; }
```

- *Type:* string[]

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn"></a>

```csharp
public string VpcArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceAwsResourcesVpcs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>

---


### SecurityagentAgentSpaceCodeReviewSettingsOutputReference <a name="SecurityagentAgentSpaceCodeReviewSettingsOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceCodeReviewSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetControlsScanning">ResetControlsScanning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetGeneralPurposeScanning">ResetGeneralPurposeScanning</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlsScanning` <a name="ResetControlsScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetControlsScanning"></a>

```csharp
private void ResetControlsScanning()
```

##### `ResetGeneralPurposeScanning` <a name="ResetGeneralPurposeScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetGeneralPurposeScanning"></a>

```csharp
private void ResetGeneralPurposeScanning()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanningInput">ControlsScanningInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanningInput">GeneralPurposeScanningInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning">ControlsScanning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning">GeneralPurposeScanning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlsScanningInput`<sup>Optional</sup> <a name="ControlsScanningInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanningInput"></a>

```csharp
public bool|IResolvable ControlsScanningInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GeneralPurposeScanningInput`<sup>Optional</sup> <a name="GeneralPurposeScanningInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanningInput"></a>

```csharp
public bool|IResolvable GeneralPurposeScanningInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ControlsScanning`<sup>Required</sup> <a name="ControlsScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning"></a>

```csharp
public bool|IResolvable ControlsScanning { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GeneralPurposeScanning`<sup>Required</sup> <a name="GeneralPurposeScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning"></a>

```csharp
public bool|IResolvable GeneralPurposeScanning { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceCodeReviewSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

---


### SecurityagentAgentSpaceIntegratedResourcesList <a name="SecurityagentAgentSpaceIntegratedResourcesList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.get"></a>

```csharp
private SecurityagentAgentSpaceIntegratedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>[]

---


### SecurityagentAgentSpaceIntegratedResourcesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.putProviderResources">PutProviderResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetIntegration">ResetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetProviderResources">ResetProviderResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderResources` <a name="PutProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.putProviderResources"></a>

```csharp
private void PutProviderResources(IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.putProviderResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>[]

---

##### `ResetIntegration` <a name="ResetIntegration" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetIntegration"></a>

```csharp
private void ResetIntegration()
```

##### `ResetProviderResources` <a name="ResetProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetProviderResources"></a>

```csharp
private void ResetProviderResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources">ProviderResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integrationInput">IntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResourcesInput">ProviderResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration">Integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderResources`<sup>Required</sup> <a name="ProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList ProviderResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a>

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integrationInput"></a>

```csharp
public string IntegrationInput { get; }
```

- *Type:* string

---

##### `ProviderResourcesInput`<sup>Optional</sup> <a name="ProviderResourcesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResourcesInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResources[] ProviderResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>[]

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration"></a>

```csharp
public string Integration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetLeaveComments">ResetLeaveComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetRemediateCode">ResetRemediateCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeaveComments` <a name="ResetLeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetLeaveComments"></a>

```csharp
private void ResetLeaveComments()
```

##### `ResetRemediateCode` <a name="ResetRemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetRemediateCode"></a>

```csharp
private void ResetRemediateCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveCommentsInput">LeaveCommentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCodeInput">RemediateCodeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeaveCommentsInput`<sup>Optional</sup> <a name="LeaveCommentsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveCommentsInput"></a>

```csharp
public bool|IResolvable LeaveCommentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemediateCodeInput`<sup>Optional</sup> <a name="RemediateCodeInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCodeInput"></a>

```csharp
public bool|IResolvable RemediateCodeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments"></a>

```csharp
public bool|IResolvable LeaveComments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode"></a>

```csharp
public bool|IResolvable RemediateCode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetWorkspace"></a>

```csharp
private void ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspaceInput"></a>

```csharp
public string WorkspaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetCreateDocument">ResetCreateDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetFetchDocument">ResetFetchDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetUpdateDocument">ResetUpdateDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateDocument` <a name="ResetCreateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetCreateDocument"></a>

```csharp
private void ResetCreateDocument()
```

##### `ResetFetchDocument` <a name="ResetFetchDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetFetchDocument"></a>

```csharp
private void ResetFetchDocument()
```

##### `ResetUpdateDocument` <a name="ResetUpdateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetUpdateDocument"></a>

```csharp
private void ResetUpdateDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocumentInput">CreateDocumentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocumentInput">FetchDocumentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocumentInput">UpdateDocumentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument">CreateDocument</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument">FetchDocument</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument">UpdateDocument</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateDocumentInput`<sup>Optional</sup> <a name="CreateDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocumentInput"></a>

```csharp
public bool|IResolvable CreateDocumentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FetchDocumentInput`<sup>Optional</sup> <a name="FetchDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocumentInput"></a>

```csharp
public bool|IResolvable FetchDocumentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UpdateDocumentInput`<sup>Optional</sup> <a name="UpdateDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocumentInput"></a>

```csharp
public bool|IResolvable UpdateDocumentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateDocument`<sup>Required</sup> <a name="CreateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument"></a>

```csharp
public bool|IResolvable CreateDocument { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FetchDocument`<sup>Required</sup> <a name="FetchDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument"></a>

```csharp
public bool|IResolvable FetchDocument { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument"></a>

```csharp
public bool|IResolvable UpdateDocument { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetPageId">ResetPageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceKey">ResetSpaceKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceTitle">ResetSpaceTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPageId` <a name="ResetPageId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetPageId"></a>

```csharp
private void ResetPageId()
```

##### `ResetSpaceKey` <a name="ResetSpaceKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceKey"></a>

```csharp
private void ResetSpaceKey()
```

##### `ResetSpaceTitle` <a name="ResetSpaceTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceTitle"></a>

```csharp
private void ResetSpaceTitle()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageIdInput">PageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKeyInput">SpaceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitleInput">SpaceTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId">PageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey">SpaceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle">SpaceTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PageIdInput`<sup>Optional</sup> <a name="PageIdInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageIdInput"></a>

```csharp
public string PageIdInput { get; }
```

- *Type:* string

---

##### `SpaceKeyInput`<sup>Optional</sup> <a name="SpaceKeyInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKeyInput"></a>

```csharp
public string SpaceKeyInput { get; }
```

- *Type:* string

---

##### `SpaceTitleInput`<sup>Optional</sup> <a name="SpaceTitleInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitleInput"></a>

```csharp
public string SpaceTitleInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId"></a>

```csharp
public string PageId { get; }
```

- *Type:* string

---

##### `SpaceKey`<sup>Required</sup> <a name="SpaceKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey"></a>

```csharp
public string SpaceKey { get; }
```

- *Type:* string

---

##### `SpaceTitle`<sup>Required</sup> <a name="SpaceTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle"></a>

```csharp
public string SpaceTitle { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetLeaveComments">ResetLeaveComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetRemediateCode">ResetRemediateCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeaveComments` <a name="ResetLeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetLeaveComments"></a>

```csharp
private void ResetLeaveComments()
```

##### `ResetRemediateCode` <a name="ResetRemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetRemediateCode"></a>

```csharp
private void ResetRemediateCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveCommentsInput">LeaveCommentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCodeInput">RemediateCodeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeaveCommentsInput`<sup>Optional</sup> <a name="LeaveCommentsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveCommentsInput"></a>

```csharp
public bool|IResolvable LeaveCommentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemediateCodeInput`<sup>Optional</sup> <a name="RemediateCodeInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCodeInput"></a>

```csharp
public bool|IResolvable RemediateCodeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments"></a>

```csharp
public bool|IResolvable LeaveComments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode"></a>

```csharp
public bool|IResolvable RemediateCode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetLeaveComments">ResetLeaveComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetRemediateCode">ResetRemediateCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeaveComments` <a name="ResetLeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetLeaveComments"></a>

```csharp
private void ResetLeaveComments()
```

##### `ResetRemediateCode` <a name="ResetRemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetRemediateCode"></a>

```csharp
private void ResetRemediateCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveCommentsInput">LeaveCommentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCodeInput">RemediateCodeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeaveCommentsInput`<sup>Optional</sup> <a name="LeaveCommentsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveCommentsInput"></a>

```csharp
public bool|IResolvable LeaveCommentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemediateCodeInput`<sup>Optional</sup> <a name="RemediateCodeInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCodeInput"></a>

```csharp
public bool|IResolvable RemediateCodeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments"></a>

```csharp
public bool|IResolvable LeaveComments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode"></a>

```csharp
public bool|IResolvable RemediateCode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get"></a>

```csharp
private SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>[]

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketCapabilities">PutBitbucketCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketRepository">PutBitbucketRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceCapabilities">PutConfluenceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceDocument">PutConfluenceDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubCapabilities">PutGitHubCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubRepository">PutGitHubRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabCapabilities">PutGitLabCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabRepository">PutGitLabRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketCapabilities">ResetBitbucketCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketRepository">ResetBitbucketRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceCapabilities">ResetConfluenceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceDocument">ResetConfluenceDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubCapabilities">ResetGitHubCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubRepository">ResetGitHubRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabCapabilities">ResetGitLabCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabRepository">ResetGitLabRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBitbucketCapabilities` <a name="PutBitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketCapabilities"></a>

```csharp
private void PutBitbucketCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---

##### `PutBitbucketRepository` <a name="PutBitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketRepository"></a>

```csharp
private void PutBitbucketRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---

##### `PutConfluenceCapabilities` <a name="PutConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceCapabilities"></a>

```csharp
private void PutConfluenceCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---

##### `PutConfluenceDocument` <a name="PutConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceDocument"></a>

```csharp
private void PutConfluenceDocument(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---

##### `PutGitHubCapabilities` <a name="PutGitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubCapabilities"></a>

```csharp
private void PutGitHubCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---

##### `PutGitHubRepository` <a name="PutGitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubRepository"></a>

```csharp
private void PutGitHubRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---

##### `PutGitLabCapabilities` <a name="PutGitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabCapabilities"></a>

```csharp
private void PutGitLabCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---

##### `PutGitLabRepository` <a name="PutGitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabRepository"></a>

```csharp
private void PutGitLabRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---

##### `ResetBitbucketCapabilities` <a name="ResetBitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketCapabilities"></a>

```csharp
private void ResetBitbucketCapabilities()
```

##### `ResetBitbucketRepository` <a name="ResetBitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketRepository"></a>

```csharp
private void ResetBitbucketRepository()
```

##### `ResetConfluenceCapabilities` <a name="ResetConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceCapabilities"></a>

```csharp
private void ResetConfluenceCapabilities()
```

##### `ResetConfluenceDocument` <a name="ResetConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceDocument"></a>

```csharp
private void ResetConfluenceDocument()
```

##### `ResetGitHubCapabilities` <a name="ResetGitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubCapabilities"></a>

```csharp
private void ResetGitHubCapabilities()
```

##### `ResetGitHubRepository` <a name="ResetGitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubRepository"></a>

```csharp
private void ResetGitHubRepository()
```

##### `ResetGitLabCapabilities` <a name="ResetGitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabCapabilities"></a>

```csharp
private void ResetGitLabCapabilities()
```

##### `ResetGitLabRepository` <a name="ResetGitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabRepository"></a>

```csharp
private void ResetGitLabRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities">BitbucketCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository">BitbucketRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities">ConfluenceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument">ConfluenceDocument</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities">GitHubCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository">GitHubRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities">GitLabCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository">GitLabRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilitiesInput">BitbucketCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepositoryInput">BitbucketRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilitiesInput">ConfluenceCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocumentInput">ConfluenceDocumentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilitiesInput">GitHubCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepositoryInput">GitHubRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilitiesInput">GitLabCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepositoryInput">GitLabRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitbucketCapabilities`<sup>Required</sup> <a name="BitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference BitbucketCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a>

---

##### `BitbucketRepository`<sup>Required</sup> <a name="BitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference BitbucketRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a>

---

##### `ConfluenceCapabilities`<sup>Required</sup> <a name="ConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference ConfluenceCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a>

---

##### `ConfluenceDocument`<sup>Required</sup> <a name="ConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference ConfluenceDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a>

---

##### `GitHubCapabilities`<sup>Required</sup> <a name="GitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference GitHubCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a>

---

##### `GitHubRepository`<sup>Required</sup> <a name="GitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference GitHubRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a>

---

##### `GitLabCapabilities`<sup>Required</sup> <a name="GitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference GitLabCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a>

---

##### `GitLabRepository`<sup>Required</sup> <a name="GitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository"></a>

```csharp
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference GitLabRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a>

---

##### `BitbucketCapabilitiesInput`<sup>Optional</sup> <a name="BitbucketCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilitiesInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities BitbucketCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---

##### `BitbucketRepositoryInput`<sup>Optional</sup> <a name="BitbucketRepositoryInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepositoryInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository BitbucketRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---

##### `ConfluenceCapabilitiesInput`<sup>Optional</sup> <a name="ConfluenceCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilitiesInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities ConfluenceCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---

##### `ConfluenceDocumentInput`<sup>Optional</sup> <a name="ConfluenceDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocumentInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument ConfluenceDocumentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---

##### `GitHubCapabilitiesInput`<sup>Optional</sup> <a name="GitHubCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilitiesInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities GitHubCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---

##### `GitHubRepositoryInput`<sup>Optional</sup> <a name="GitHubRepositoryInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepositoryInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository GitHubRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---

##### `GitLabCapabilitiesInput`<sup>Optional</sup> <a name="GitLabCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilitiesInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities GitLabCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---

##### `GitLabRepositoryInput`<sup>Optional</sup> <a name="GitLabRepositoryInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepositoryInput"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository GitLabRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>

---


### SecurityagentAgentSpaceTagsList <a name="SecurityagentAgentSpaceTagsList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.get"></a>

```csharp
private SecurityagentAgentSpaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>[]

---


### SecurityagentAgentSpaceTagsOutputReference <a name="SecurityagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentAgentSpaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentAgentSpaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>

---



