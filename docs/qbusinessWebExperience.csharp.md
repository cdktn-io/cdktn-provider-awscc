# `qbusinessWebExperience` Submodule <a name="`qbusinessWebExperience` Submodule" id="@cdktn/provider-awscc.qbusinessWebExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessWebExperience <a name="QbusinessWebExperience" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience awscc_qbusiness_web_experience}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperience(Construct Scope, string Id, QbusinessWebExperienceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig">QbusinessWebExperienceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig">QbusinessWebExperienceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration">PutBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration">PutCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration">PutIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration">ResetBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration">ResetCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration">ResetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins">ResetOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode">ResetSamplePromptsControlMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle">ResetSubtitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage">ResetWelcomeMessage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBrowserExtensionConfiguration` <a name="PutBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration"></a>

```csharp
private void PutBrowserExtensionConfiguration(QbusinessWebExperienceBrowserExtensionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---

##### `PutCustomizationConfiguration` <a name="PutCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration"></a>

```csharp
private void PutCustomizationConfiguration(QbusinessWebExperienceCustomizationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---

##### `PutIdentityProviderConfiguration` <a name="PutIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration"></a>

```csharp
private void PutIdentityProviderConfiguration(QbusinessWebExperienceIdentityProviderConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags"></a>

```csharp
private void PutTags(IResolvable|QbusinessWebExperienceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

---

##### `ResetBrowserExtensionConfiguration` <a name="ResetBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration"></a>

```csharp
private void ResetBrowserExtensionConfiguration()
```

##### `ResetCustomizationConfiguration` <a name="ResetCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration"></a>

```csharp
private void ResetCustomizationConfiguration()
```

##### `ResetIdentityProviderConfiguration` <a name="ResetIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration"></a>

```csharp
private void ResetIdentityProviderConfiguration()
```

##### `ResetOrigins` <a name="ResetOrigins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins"></a>

```csharp
private void ResetOrigins()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSamplePromptsControlMode` <a name="ResetSamplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode"></a>

```csharp
private void ResetSamplePromptsControlMode()
```

##### `ResetSubtitle` <a name="ResetSubtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle"></a>

```csharp
private void ResetSubtitle()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetWelcomeMessage` <a name="ResetWelcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage"></a>

```csharp
private void ResetWelcomeMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessWebExperience.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessWebExperience.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessWebExperience.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessWebExperience.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QbusinessWebExperience to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QbusinessWebExperience that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessWebExperience to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration">BrowserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration">CustomizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint">DefaultEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn">WebExperienceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId">WebExperienceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput">BrowserExtensionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput">CustomizationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput">IdentityProviderConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput">OriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput">SamplePromptsControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput">SubtitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput">WelcomeMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins">Origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode">SamplePromptsControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle">Subtitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage">WelcomeMessage</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BrowserExtensionConfiguration`<sup>Required</sup> <a name="BrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration"></a>

```csharp
public QbusinessWebExperienceBrowserExtensionConfigurationOutputReference BrowserExtensionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomizationConfiguration`<sup>Required</sup> <a name="CustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration"></a>

```csharp
public QbusinessWebExperienceCustomizationConfigurationOutputReference CustomizationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a>

---

##### `DefaultEndpoint`<sup>Required</sup> <a name="DefaultEndpoint" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint"></a>

```csharp
public string DefaultEndpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderConfiguration`<sup>Required</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration"></a>

```csharp
public QbusinessWebExperienceIdentityProviderConfigurationOutputReference IdentityProviderConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags"></a>

```csharp
public QbusinessWebExperienceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `WebExperienceArn`<sup>Required</sup> <a name="WebExperienceArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn"></a>

```csharp
public string WebExperienceArn { get; }
```

- *Type:* string

---

##### `WebExperienceId`<sup>Required</sup> <a name="WebExperienceId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId"></a>

```csharp
public string WebExperienceId { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `BrowserExtensionConfigurationInput`<sup>Optional</sup> <a name="BrowserExtensionConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput"></a>

```csharp
public IResolvable|QbusinessWebExperienceBrowserExtensionConfiguration BrowserExtensionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---

##### `CustomizationConfigurationInput`<sup>Optional</sup> <a name="CustomizationConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput"></a>

```csharp
public IResolvable|QbusinessWebExperienceCustomizationConfiguration CustomizationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---

##### `IdentityProviderConfigurationInput`<sup>Optional</sup> <a name="IdentityProviderConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput"></a>

```csharp
public IResolvable|QbusinessWebExperienceIdentityProviderConfiguration IdentityProviderConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput"></a>

```csharp
public string[] OriginsInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SamplePromptsControlModeInput`<sup>Optional</sup> <a name="SamplePromptsControlModeInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput"></a>

```csharp
public string SamplePromptsControlModeInput { get; }
```

- *Type:* string

---

##### `SubtitleInput`<sup>Optional</sup> <a name="SubtitleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput"></a>

```csharp
public string SubtitleInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput"></a>

```csharp
public IResolvable|QbusinessWebExperienceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WelcomeMessageInput`<sup>Optional</sup> <a name="WelcomeMessageInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput"></a>

```csharp
public string WelcomeMessageInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins"></a>

```csharp
public string[] Origins { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SamplePromptsControlMode`<sup>Required</sup> <a name="SamplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode"></a>

```csharp
public string SamplePromptsControlMode { get; }
```

- *Type:* string

---

##### `Subtitle`<sup>Required</sup> <a name="Subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle"></a>

```csharp
public string Subtitle { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `WelcomeMessage`<sup>Required</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage"></a>

```csharp
public string WelcomeMessage { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessWebExperienceBrowserExtensionConfiguration <a name="QbusinessWebExperienceBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceBrowserExtensionConfiguration {
    string[] EnabledBrowserExtensions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions">EnabledBrowserExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}. |

---

##### `EnabledBrowserExtensions`<sup>Optional</sup> <a name="EnabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions"></a>

```csharp
public string[] EnabledBrowserExtensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}.

---

### QbusinessWebExperienceConfig <a name="QbusinessWebExperienceConfig" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    QbusinessWebExperienceBrowserExtensionConfiguration BrowserExtensionConfiguration = null,
    QbusinessWebExperienceCustomizationConfiguration CustomizationConfiguration = null,
    QbusinessWebExperienceIdentityProviderConfiguration IdentityProviderConfiguration = null,
    string[] Origins = null,
    string RoleArn = null,
    string SamplePromptsControlMode = null,
    string Subtitle = null,
    IResolvable|QbusinessWebExperienceTags[] Tags = null,
    string Title = null,
    string WelcomeMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration">BrowserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration">CustomizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins">Origins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode">SamplePromptsControlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle">Subtitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage">WelcomeMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}.

---

##### `BrowserExtensionConfiguration`<sup>Optional</sup> <a name="BrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration"></a>

```csharp
public QbusinessWebExperienceBrowserExtensionConfiguration BrowserExtensionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}.

---

##### `CustomizationConfiguration`<sup>Optional</sup> <a name="CustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration"></a>

```csharp
public QbusinessWebExperienceCustomizationConfiguration CustomizationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}.

---

##### `IdentityProviderConfiguration`<sup>Optional</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration"></a>

```csharp
public QbusinessWebExperienceIdentityProviderConfiguration IdentityProviderConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}.

---

##### `Origins`<sup>Optional</sup> <a name="Origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins"></a>

```csharp
public string[] Origins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}.

---

##### `SamplePromptsControlMode`<sup>Optional</sup> <a name="SamplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode"></a>

```csharp
public string SamplePromptsControlMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}.

---

##### `Subtitle`<sup>Optional</sup> <a name="Subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle"></a>

```csharp
public string Subtitle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags"></a>

```csharp
public IResolvable|QbusinessWebExperienceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}.

---

##### `WelcomeMessage`<sup>Optional</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage"></a>

```csharp
public string WelcomeMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}.

---

### QbusinessWebExperienceCustomizationConfiguration <a name="QbusinessWebExperienceCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceCustomizationConfiguration {
    string CustomCssUrl = null,
    string FaviconUrl = null,
    string FontUrl = null,
    string LogoUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl">CustomCssUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl">FaviconUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl">FontUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl">LogoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}. |

---

##### `CustomCssUrl`<sup>Optional</sup> <a name="CustomCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl"></a>

```csharp
public string CustomCssUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}.

---

##### `FaviconUrl`<sup>Optional</sup> <a name="FaviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl"></a>

```csharp
public string FaviconUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}.

---

##### `FontUrl`<sup>Optional</sup> <a name="FontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl"></a>

```csharp
public string FontUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}.

---

##### `LogoUrl`<sup>Optional</sup> <a name="LogoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl"></a>

```csharp
public string LogoUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}.

---

### QbusinessWebExperienceIdentityProviderConfiguration <a name="QbusinessWebExperienceIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceIdentityProviderConfiguration {
    QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration OpenIdConnectConfiguration = null,
    QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration SamlConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}. |

---

##### `OpenIdConnectConfiguration`<sup>Optional</sup> <a name="OpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration"></a>

```csharp
public QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration OpenIdConnectConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}.

---

##### `SamlConfiguration`<sup>Optional</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration"></a>

```csharp
public QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration SamlConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}.

---

### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration {
    string SecretsArn = null,
    string SecretsRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn">SecretsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole">SecretsRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}. |

---

##### `SecretsArn`<sup>Optional</sup> <a name="SecretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn"></a>

```csharp
public string SecretsArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}.

---

##### `SecretsRole`<sup>Optional</sup> <a name="SecretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole"></a>

```csharp
public string SecretsRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}.

---

### QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration {
    string AuthenticationUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl">AuthenticationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}. |

---

##### `AuthenticationUrl`<sup>Optional</sup> <a name="AuthenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl"></a>

```csharp
public string AuthenticationUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}.

---

### QbusinessWebExperienceTags <a name="QbusinessWebExperienceTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessWebExperienceBrowserExtensionConfigurationOutputReference <a name="QbusinessWebExperienceBrowserExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceBrowserExtensionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions">ResetEnabledBrowserExtensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledBrowserExtensions` <a name="ResetEnabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions"></a>

```csharp
private void ResetEnabledBrowserExtensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput">EnabledBrowserExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions">EnabledBrowserExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledBrowserExtensionsInput`<sup>Optional</sup> <a name="EnabledBrowserExtensionsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput"></a>

```csharp
public string[] EnabledBrowserExtensionsInput { get; }
```

- *Type:* string[]

---

##### `EnabledBrowserExtensions`<sup>Required</sup> <a name="EnabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions"></a>

```csharp
public string[] EnabledBrowserExtensions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessWebExperienceBrowserExtensionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---


### QbusinessWebExperienceCustomizationConfigurationOutputReference <a name="QbusinessWebExperienceCustomizationConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceCustomizationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl">ResetCustomCssUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl">ResetFaviconUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl">ResetFontUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl">ResetLogoUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomCssUrl` <a name="ResetCustomCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl"></a>

```csharp
private void ResetCustomCssUrl()
```

##### `ResetFaviconUrl` <a name="ResetFaviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl"></a>

```csharp
private void ResetFaviconUrl()
```

##### `ResetFontUrl` <a name="ResetFontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl"></a>

```csharp
private void ResetFontUrl()
```

##### `ResetLogoUrl` <a name="ResetLogoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl"></a>

```csharp
private void ResetLogoUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput">CustomCssUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput">FaviconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput">FontUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput">LogoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl">CustomCssUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl">FaviconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl">FontUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCssUrlInput`<sup>Optional</sup> <a name="CustomCssUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput"></a>

```csharp
public string CustomCssUrlInput { get; }
```

- *Type:* string

---

##### `FaviconUrlInput`<sup>Optional</sup> <a name="FaviconUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput"></a>

```csharp
public string FaviconUrlInput { get; }
```

- *Type:* string

---

##### `FontUrlInput`<sup>Optional</sup> <a name="FontUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput"></a>

```csharp
public string FontUrlInput { get; }
```

- *Type:* string

---

##### `LogoUrlInput`<sup>Optional</sup> <a name="LogoUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput"></a>

```csharp
public string LogoUrlInput { get; }
```

- *Type:* string

---

##### `CustomCssUrl`<sup>Required</sup> <a name="CustomCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl"></a>

```csharp
public string CustomCssUrl { get; }
```

- *Type:* string

---

##### `FaviconUrl`<sup>Required</sup> <a name="FaviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl"></a>

```csharp
public string FaviconUrl { get; }
```

- *Type:* string

---

##### `FontUrl`<sup>Required</sup> <a name="FontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl"></a>

```csharp
public string FontUrl { get; }
```

- *Type:* string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessWebExperienceCustomizationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn">ResetSecretsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole">ResetSecretsRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretsArn` <a name="ResetSecretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn"></a>

```csharp
private void ResetSecretsArn()
```

##### `ResetSecretsRole` <a name="ResetSecretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole"></a>

```csharp
private void ResetSecretsRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput">SecretsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput">SecretsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn">SecretsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole">SecretsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretsArnInput`<sup>Optional</sup> <a name="SecretsArnInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput"></a>

```csharp
public string SecretsArnInput { get; }
```

- *Type:* string

---

##### `SecretsRoleInput`<sup>Optional</sup> <a name="SecretsRoleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput"></a>

```csharp
public string SecretsRoleInput { get; }
```

- *Type:* string

---

##### `SecretsArn`<sup>Required</sup> <a name="SecretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn"></a>

```csharp
public string SecretsArn { get; }
```

- *Type:* string

---

##### `SecretsRole`<sup>Required</sup> <a name="SecretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole"></a>

```csharp
public string SecretsRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceIdentityProviderConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration">PutOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration">PutSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration">ResetOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration">ResetSamlConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOpenIdConnectConfiguration` <a name="PutOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration"></a>

```csharp
private void PutOpenIdConnectConfiguration(QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---

##### `PutSamlConfiguration` <a name="PutSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration"></a>

```csharp
private void PutSamlConfiguration(QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---

##### `ResetOpenIdConnectConfiguration` <a name="ResetOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration"></a>

```csharp
private void ResetOpenIdConnectConfiguration()
```

##### `ResetSamlConfiguration` <a name="ResetSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration"></a>

```csharp
private void ResetSamlConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput">OpenIdConnectConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput">SamlConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OpenIdConnectConfiguration`<sup>Required</sup> <a name="OpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```csharp
public QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference OpenIdConnectConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `SamlConfiguration`<sup>Required</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration"></a>

```csharp
public QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference SamlConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a>

---

##### `OpenIdConnectConfigurationInput`<sup>Optional</sup> <a name="OpenIdConnectConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput"></a>

```csharp
public IResolvable|QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration OpenIdConnectConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---

##### `SamlConfigurationInput`<sup>Optional</sup> <a name="SamlConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput"></a>

```csharp
public IResolvable|QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration SamlConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessWebExperienceIdentityProviderConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl">ResetAuthenticationUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationUrl` <a name="ResetAuthenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl"></a>

```csharp
private void ResetAuthenticationUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput">AuthenticationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl">AuthenticationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationUrlInput`<sup>Optional</sup> <a name="AuthenticationUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput"></a>

```csharp
public string AuthenticationUrlInput { get; }
```

- *Type:* string

---

##### `AuthenticationUrl`<sup>Required</sup> <a name="AuthenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl"></a>

```csharp
public string AuthenticationUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---


### QbusinessWebExperienceTagsList <a name="QbusinessWebExperienceTagsList" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get"></a>

```csharp
private QbusinessWebExperienceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue"></a>

```csharp
public IResolvable|QbusinessWebExperienceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

---


### QbusinessWebExperienceTagsOutputReference <a name="QbusinessWebExperienceTagsOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessWebExperienceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessWebExperienceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>

---



