# `ecrRepositoryCreationTemplate` Submodule <a name="`ecrRepositoryCreationTemplate` Submodule" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepositoryCreationTemplate <a name="EcrRepositoryCreationTemplate" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template awscc_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplate(Construct Scope, string Id, EcrRepositoryCreationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig">EcrRepositoryCreationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig">EcrRepositoryCreationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters">PutImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn">ResetCustomRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability">ResetImageTagMutability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters">ResetImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy">ResetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy">ResetRepositoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags">ResetResourceTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(EcrRepositoryCreationTemplateEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---

##### `PutImageTagMutabilityExclusionFilters` <a name="PutImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters"></a>

```csharp
private void PutImageTagMutabilityExclusionFilters(IResolvable|EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

---

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags"></a>

```csharp
private void PutResourceTags(IResolvable|EcrRepositoryCreationTemplateResourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

---

##### `ResetCustomRoleArn` <a name="ResetCustomRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn"></a>

```csharp
private void ResetCustomRoleArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetImageTagMutability` <a name="ResetImageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability"></a>

```csharp
private void ResetImageTagMutability()
```

##### `ResetImageTagMutabilityExclusionFilters` <a name="ResetImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters"></a>

```csharp
private void ResetImageTagMutabilityExclusionFilters()
```

##### `ResetLifecyclePolicy` <a name="ResetLifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy"></a>

```csharp
private void ResetLifecyclePolicy()
```

##### `ResetRepositoryPolicy` <a name="ResetRepositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy"></a>

```csharp
private void ResetRepositoryPolicy()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrRepositoryCreationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrRepositoryCreationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrRepositoryCreationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrRepositoryCreationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrRepositoryCreationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput">AppliedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput">CustomRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput">ImageTagMutabilityExclusionFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput">ImageTagMutabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput">LifecyclePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput">RepositoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor">AppliedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability">ImageTagMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy">RepositoryPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```csharp
public EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilters`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters"></a>

```csharp
public EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList ImageTagMutabilityExclusionFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a>

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags"></a>

```csharp
public EcrRepositoryCreationTemplateResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AppliedForInput`<sup>Optional</sup> <a name="AppliedForInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput"></a>

```csharp
public string[] AppliedForInput { get; }
```

- *Type:* string[]

---

##### `CustomRoleArnInput`<sup>Optional</sup> <a name="CustomRoleArnInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput"></a>

```csharp
public string CustomRoleArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---

##### `ImageTagMutabilityExclusionFiltersInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFiltersInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[] ImageTagMutabilityExclusionFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

---

##### `ImageTagMutabilityInput`<sup>Optional</sup> <a name="ImageTagMutabilityInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput"></a>

```csharp
public string ImageTagMutabilityInput { get; }
```

- *Type:* string

---

##### `LifecyclePolicyInput`<sup>Optional</sup> <a name="LifecyclePolicyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput"></a>

```csharp
public string LifecyclePolicyInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RepositoryPolicyInput`<sup>Optional</sup> <a name="RepositoryPolicyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput"></a>

```csharp
public string RepositoryPolicyInput { get; }
```

- *Type:* string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateResourceTags[] ResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

---

##### `AppliedFor`<sup>Required</sup> <a name="AppliedFor" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor"></a>

```csharp
public string[] AppliedFor { get; }
```

- *Type:* string[]

---

##### `CustomRoleArn`<sup>Required</sup> <a name="CustomRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ImageTagMutability`<sup>Required</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```csharp
public string ImageTagMutability { get; }
```

- *Type:* string

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```csharp
public string LifecyclePolicy { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `RepositoryPolicy`<sup>Required</sup> <a name="RepositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```csharp
public string RepositoryPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryCreationTemplateConfig <a name="EcrRepositoryCreationTemplateConfig" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AppliedFor,
    string Prefix,
    string CustomRoleArn = null,
    string Description = null,
    EcrRepositoryCreationTemplateEncryptionConfiguration EncryptionConfiguration = null,
    string ImageTagMutability = null,
    IResolvable|EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[] ImageTagMutabilityExclusionFilters = null,
    string LifecyclePolicy = null,
    string RepositoryPolicy = null,
    IResolvable|EcrRepositoryCreationTemplateResourceTags[] ResourceTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor">AppliedFor</a></code> | <code>string[]</code> | A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix">Prefix</a></code> | <code>string</code> | The repository namespace prefix associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | The ARN of the role to be assumed by Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description">Description</a></code> | <code>string</code> | The description associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | The encryption configuration associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability">ImageTagMutability</a></code> | <code>string</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]</code> | A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>string</code> | The lifecycle policy to use for repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy">RepositoryPolicy</a></code> | <code>string</code> | The repository policy to apply to repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags">ResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]</code> | The metadata to apply to the repository to help you categorize and organize. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppliedFor`<sup>Required</sup> <a name="AppliedFor" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor"></a>

```csharp
public string[] AppliedFor { get; set; }
```

- *Type:* string[]

A list of enumerable Strings representing the repository creation scenarios that this template will apply towards.

The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The repository namespace prefix associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}

---

##### `CustomRoleArn`<sup>Optional</sup> <a name="CustomRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; set; }
```

- *Type:* string

The ARN of the role to be assumed by Amazon ECR.

Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration"></a>

```csharp
public EcrRepositoryCreationTemplateEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

The encryption configuration associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}

---

##### `ImageTagMutability`<sup>Optional</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability"></a>

```csharp
public string ImageTagMutability { get; set; }
```

- *Type:* string

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}

---

##### `ImageTagMutabilityExclusionFilters`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[] ImageTagMutabilityExclusionFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filters EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filters}

---

##### `LifecyclePolicy`<sup>Optional</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy"></a>

```csharp
public string LifecyclePolicy { get; set; }
```

- *Type:* string

The lifecycle policy to use for repositories created using the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}

---

##### `RepositoryPolicy`<sup>Optional</sup> <a name="RepositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy"></a>

```csharp
public string RepositoryPolicy { get; set; }
```

- *Type:* string

The repository policy to apply to repositories created using the template.

A repository policy is a permissions policy associated with a repository to control access permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateResourceTags[] ResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

The metadata to apply to the repository to help you categorize and organize.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}

---

### EcrRepositoryCreationTemplateEncryptionConfiguration <a name="EcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateEncryptionConfiguration {
    string EncryptionType = null,
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType">EncryptionType</a></code> | <code>string</code> | The encryption type to use. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>string</code> | If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

The encryption type to use.

If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}

---

### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters {
    string ImageTagMutabilityExclusionFilterType = null,
    string ImageTagMutabilityExclusionFilterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}. |

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType"></a>

```csharp
public string ImageTagMutabilityExclusionFilterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}.

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue"></a>

```csharp
public string ImageTagMutabilityExclusionFilterValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}.

---

### EcrRepositoryCreationTemplateResourceTags <a name="EcrRepositoryCreationTemplateResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateResourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key">Key</a></code> | <code>string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value">Value</a></code> | <code>string</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#key EcrRepositoryCreationTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#value EcrRepositoryCreationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get"></a>

```csharp
private EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType">ResetImageTagMutabilityExclusionFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue">ResetImageTagMutabilityExclusionFilterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTagMutabilityExclusionFilterType` <a name="ResetImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType"></a>

```csharp
private void ResetImageTagMutabilityExclusionFilterType()
```

##### `ResetImageTagMutabilityExclusionFilterValue` <a name="ResetImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue"></a>

```csharp
private void ResetImageTagMutabilityExclusionFilterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput">ImageTagMutabilityExclusionFilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput">ImageTagMutabilityExclusionFilterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilterTypeInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterTypeInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput"></a>

```csharp
public string ImageTagMutabilityExclusionFilterTypeInput { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilterValueInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterValueInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput"></a>

```csharp
public string ImageTagMutabilityExclusionFilterValueInput { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```csharp
public string ImageTagMutabilityExclusionFilterType { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```csharp
public string ImageTagMutabilityExclusionFilterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>

---


### EcrRepositoryCreationTemplateResourceTagsList <a name="EcrRepositoryCreationTemplateResourceTagsList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get"></a>

```csharp
private EcrRepositoryCreationTemplateResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateResourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

---


### EcrRepositoryCreationTemplateResourceTagsOutputReference <a name="EcrRepositoryCreationTemplateResourceTagsOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrRepositoryCreationTemplateResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcrRepositoryCreationTemplateResourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>

---



