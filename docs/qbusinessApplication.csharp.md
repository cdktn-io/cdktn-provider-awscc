# `qbusinessApplication` Submodule <a name="`qbusinessApplication` Submodule" id="@cdktn/provider-awscc.qbusinessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessApplication <a name="QbusinessApplication" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application awscc_qbusiness_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplication(Construct Scope, string Id, QbusinessApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig">QbusinessApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig">QbusinessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration">PutAttachmentsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration">PutAutoSubscriptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration">PutPersonalizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration">PutQAppsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration">PutQuickSightConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAttachmentsConfiguration">ResetAttachmentsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAutoSubscriptionConfiguration">ResetAutoSubscriptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetClientIdsForOidc">ResetClientIdsForOidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIamIdentityProviderArn">ResetIamIdentityProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityCenterInstanceArn">ResetIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetPersonalizationConfiguration">ResetPersonalizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQAppsConfiguration">ResetQAppsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQuickSightConfiguration">ResetQuickSightConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachmentsConfiguration` <a name="PutAttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration"></a>

```csharp
private void PutAttachmentsConfiguration(QbusinessApplicationAttachmentsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

---

##### `PutAutoSubscriptionConfiguration` <a name="PutAutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration"></a>

```csharp
private void PutAutoSubscriptionConfiguration(QbusinessApplicationAutoSubscriptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(QbusinessApplicationEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

---

##### `PutPersonalizationConfiguration` <a name="PutPersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration"></a>

```csharp
private void PutPersonalizationConfiguration(QbusinessApplicationPersonalizationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

---

##### `PutQAppsConfiguration` <a name="PutQAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration"></a>

```csharp
private void PutQAppsConfiguration(QbusinessApplicationQAppsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

---

##### `PutQuickSightConfiguration` <a name="PutQuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration"></a>

```csharp
private void PutQuickSightConfiguration(QbusinessApplicationQuickSightConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags"></a>

```csharp
private void PutTags(IResolvable|QbusinessApplicationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>[]

---

##### `ResetAttachmentsConfiguration` <a name="ResetAttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAttachmentsConfiguration"></a>

```csharp
private void ResetAttachmentsConfiguration()
```

##### `ResetAutoSubscriptionConfiguration` <a name="ResetAutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAutoSubscriptionConfiguration"></a>

```csharp
private void ResetAutoSubscriptionConfiguration()
```

##### `ResetClientIdsForOidc` <a name="ResetClientIdsForOidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetClientIdsForOidc"></a>

```csharp
private void ResetClientIdsForOidc()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetIamIdentityProviderArn` <a name="ResetIamIdentityProviderArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIamIdentityProviderArn"></a>

```csharp
private void ResetIamIdentityProviderArn()
```

##### `ResetIdentityCenterInstanceArn` <a name="ResetIdentityCenterInstanceArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityCenterInstanceArn"></a>

```csharp
private void ResetIdentityCenterInstanceArn()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityType"></a>

```csharp
private void ResetIdentityType()
```

##### `ResetPersonalizationConfiguration` <a name="ResetPersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetPersonalizationConfiguration"></a>

```csharp
private void ResetPersonalizationConfiguration()
```

##### `ResetQAppsConfiguration` <a name="ResetQAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQAppsConfiguration"></a>

```csharp
private void ResetQAppsConfiguration()
```

##### `ResetQuickSightConfiguration` <a name="ResetQuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQuickSightConfiguration"></a>

```csharp
private void ResetQuickSightConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QbusinessApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QbusinessApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QbusinessApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QbusinessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfiguration">AttachmentsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference">QbusinessApplicationAttachmentsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfiguration">AutoSubscriptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference">QbusinessApplicationAutoSubscriptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference">QbusinessApplicationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterApplicationArn">IdentityCenterApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfiguration">PersonalizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference">QbusinessApplicationPersonalizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfiguration">QAppsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference">QbusinessApplicationQAppsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfiguration">QuickSightConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference">QbusinessApplicationQuickSightConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList">QbusinessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfigurationInput">AttachmentsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfigurationInput">AutoSubscriptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidcInput">ClientIdsForOidcInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArnInput">IamIdentityProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArnInput">IdentityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityTypeInput">IdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfigurationInput">PersonalizationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfigurationInput">QAppsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfigurationInput">QuickSightConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidc">ClientIdsForOidc</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArn">IamIdentityProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `AttachmentsConfiguration`<sup>Required</sup> <a name="AttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfiguration"></a>

```csharp
public QbusinessApplicationAttachmentsConfigurationOutputReference AttachmentsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference">QbusinessApplicationAttachmentsConfigurationOutputReference</a>

---

##### `AutoSubscriptionConfiguration`<sup>Required</sup> <a name="AutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfiguration"></a>

```csharp
public QbusinessApplicationAutoSubscriptionConfigurationOutputReference AutoSubscriptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference">QbusinessApplicationAutoSubscriptionConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfiguration"></a>

```csharp
public QbusinessApplicationEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference">QbusinessApplicationEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityCenterApplicationArn`<sup>Required</sup> <a name="IdentityCenterApplicationArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterApplicationArn"></a>

```csharp
public string IdentityCenterApplicationArn { get; }
```

- *Type:* string

---

##### `PersonalizationConfiguration`<sup>Required</sup> <a name="PersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfiguration"></a>

```csharp
public QbusinessApplicationPersonalizationConfigurationOutputReference PersonalizationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference">QbusinessApplicationPersonalizationConfigurationOutputReference</a>

---

##### `QAppsConfiguration`<sup>Required</sup> <a name="QAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfiguration"></a>

```csharp
public QbusinessApplicationQAppsConfigurationOutputReference QAppsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference">QbusinessApplicationQAppsConfigurationOutputReference</a>

---

##### `QuickSightConfiguration`<sup>Required</sup> <a name="QuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfiguration"></a>

```csharp
public QbusinessApplicationQuickSightConfigurationOutputReference QuickSightConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference">QbusinessApplicationQuickSightConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tags"></a>

```csharp
public QbusinessApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList">QbusinessApplicationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AttachmentsConfigurationInput`<sup>Optional</sup> <a name="AttachmentsConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfigurationInput"></a>

```csharp
public IResolvable|QbusinessApplicationAttachmentsConfiguration AttachmentsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

---

##### `AutoSubscriptionConfigurationInput`<sup>Optional</sup> <a name="AutoSubscriptionConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfigurationInput"></a>

```csharp
public IResolvable|QbusinessApplicationAutoSubscriptionConfiguration AutoSubscriptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

---

##### `ClientIdsForOidcInput`<sup>Optional</sup> <a name="ClientIdsForOidcInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidcInput"></a>

```csharp
public string[] ClientIdsForOidcInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|QbusinessApplicationEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

---

##### `IamIdentityProviderArnInput`<sup>Optional</sup> <a name="IamIdentityProviderArnInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArnInput"></a>

```csharp
public string IamIdentityProviderArnInput { get; }
```

- *Type:* string

---

##### `IdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IdentityCenterInstanceArnInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArnInput"></a>

```csharp
public string IdentityCenterInstanceArnInput { get; }
```

- *Type:* string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityTypeInput"></a>

```csharp
public string IdentityTypeInput { get; }
```

- *Type:* string

---

##### `PersonalizationConfigurationInput`<sup>Optional</sup> <a name="PersonalizationConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfigurationInput"></a>

```csharp
public IResolvable|QbusinessApplicationPersonalizationConfiguration PersonalizationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

---

##### `QAppsConfigurationInput`<sup>Optional</sup> <a name="QAppsConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfigurationInput"></a>

```csharp
public IResolvable|QbusinessApplicationQAppsConfiguration QAppsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

---

##### `QuickSightConfigurationInput`<sup>Optional</sup> <a name="QuickSightConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfigurationInput"></a>

```csharp
public IResolvable|QbusinessApplicationQuickSightConfiguration QuickSightConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tagsInput"></a>

```csharp
public IResolvable|QbusinessApplicationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>[]

---

##### `ClientIdsForOidc`<sup>Required</sup> <a name="ClientIdsForOidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidc"></a>

```csharp
public string[] ClientIdsForOidc { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IamIdentityProviderArn`<sup>Required</sup> <a name="IamIdentityProviderArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArn"></a>

```csharp
public string IamIdentityProviderArn { get; }
```

- *Type:* string

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArn"></a>

```csharp
public string IdentityCenterInstanceArn { get; }
```

- *Type:* string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessApplicationAttachmentsConfiguration <a name="QbusinessApplicationAttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationAttachmentsConfiguration {
    string AttachmentsControlMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.property.attachmentsControlMode">AttachmentsControlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}. |

---

##### `AttachmentsControlMode`<sup>Optional</sup> <a name="AttachmentsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.property.attachmentsControlMode"></a>

```csharp
public string AttachmentsControlMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}.

---

### QbusinessApplicationAutoSubscriptionConfiguration <a name="QbusinessApplicationAutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationAutoSubscriptionConfiguration {
    string AutoSubscribe = null,
    string DefaultSubscriptionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.autoSubscribe">AutoSubscribe</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscribe QbusinessApplication#auto_subscribe}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.defaultSubscriptionType">DefaultSubscriptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#default_subscription_type QbusinessApplication#default_subscription_type}. |

---

##### `AutoSubscribe`<sup>Optional</sup> <a name="AutoSubscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.autoSubscribe"></a>

```csharp
public string AutoSubscribe { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscribe QbusinessApplication#auto_subscribe}.

---

##### `DefaultSubscriptionType`<sup>Optional</sup> <a name="DefaultSubscriptionType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.defaultSubscriptionType"></a>

```csharp
public string DefaultSubscriptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#default_subscription_type QbusinessApplication#default_subscription_type}.

---

### QbusinessApplicationConfig <a name="QbusinessApplicationConfig" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    QbusinessApplicationAttachmentsConfiguration AttachmentsConfiguration = null,
    QbusinessApplicationAutoSubscriptionConfiguration AutoSubscriptionConfiguration = null,
    string[] ClientIdsForOidc = null,
    string Description = null,
    QbusinessApplicationEncryptionConfiguration EncryptionConfiguration = null,
    string IamIdentityProviderArn = null,
    string IdentityCenterInstanceArn = null,
    string IdentityType = null,
    QbusinessApplicationPersonalizationConfiguration PersonalizationConfiguration = null,
    QbusinessApplicationQAppsConfiguration QAppsConfiguration = null,
    QbusinessApplicationQuickSightConfiguration QuickSightConfiguration = null,
    string RoleArn = null,
    IResolvable|QbusinessApplicationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.attachmentsConfiguration">AttachmentsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.autoSubscriptionConfiguration">AutoSubscriptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.clientIdsForOidc">ClientIdsForOidc</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#description QbusinessApplication#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.iamIdentityProviderArn">IamIdentityProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityType">IdentityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.personalizationConfiguration">PersonalizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.qAppsConfiguration">QAppsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.quickSightConfiguration">QuickSightConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}.

---

##### `AttachmentsConfiguration`<sup>Optional</sup> <a name="AttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.attachmentsConfiguration"></a>

```csharp
public QbusinessApplicationAttachmentsConfiguration AttachmentsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}.

---

##### `AutoSubscriptionConfiguration`<sup>Optional</sup> <a name="AutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.autoSubscriptionConfiguration"></a>

```csharp
public QbusinessApplicationAutoSubscriptionConfiguration AutoSubscriptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}.

---

##### `ClientIdsForOidc`<sup>Optional</sup> <a name="ClientIdsForOidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.clientIdsForOidc"></a>

```csharp
public string[] ClientIdsForOidc { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#description QbusinessApplication#description}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.encryptionConfiguration"></a>

```csharp
public QbusinessApplicationEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}.

---

##### `IamIdentityProviderArn`<sup>Optional</sup> <a name="IamIdentityProviderArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.iamIdentityProviderArn"></a>

```csharp
public string IamIdentityProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}.

---

##### `IdentityCenterInstanceArn`<sup>Optional</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityCenterInstanceArn"></a>

```csharp
public string IdentityCenterInstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityType"></a>

```csharp
public string IdentityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}.

---

##### `PersonalizationConfiguration`<sup>Optional</sup> <a name="PersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.personalizationConfiguration"></a>

```csharp
public QbusinessApplicationPersonalizationConfiguration PersonalizationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}.

---

##### `QAppsConfiguration`<sup>Optional</sup> <a name="QAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.qAppsConfiguration"></a>

```csharp
public QbusinessApplicationQAppsConfiguration QAppsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}.

---

##### `QuickSightConfiguration`<sup>Optional</sup> <a name="QuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.quickSightConfiguration"></a>

```csharp
public QbusinessApplicationQuickSightConfiguration QuickSightConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.tags"></a>

```csharp
public IResolvable|QbusinessApplicationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}.

---

### QbusinessApplicationEncryptionConfiguration <a name="QbusinessApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationEncryptionConfiguration {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}.

---

### QbusinessApplicationPersonalizationConfiguration <a name="QbusinessApplicationPersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationPersonalizationConfiguration {
    string PersonalizationControlMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.property.personalizationControlMode">PersonalizationControlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_control_mode QbusinessApplication#personalization_control_mode}. |

---

##### `PersonalizationControlMode`<sup>Optional</sup> <a name="PersonalizationControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.property.personalizationControlMode"></a>

```csharp
public string PersonalizationControlMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_control_mode QbusinessApplication#personalization_control_mode}.

---

### QbusinessApplicationQAppsConfiguration <a name="QbusinessApplicationQAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationQAppsConfiguration {
    string QAppsControlMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.property.qAppsControlMode">QAppsControlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_control_mode QbusinessApplication#q_apps_control_mode}. |

---

##### `QAppsControlMode`<sup>Optional</sup> <a name="QAppsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.property.qAppsControlMode"></a>

```csharp
public string QAppsControlMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_control_mode QbusinessApplication#q_apps_control_mode}.

---

### QbusinessApplicationQuickSightConfiguration <a name="QbusinessApplicationQuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationQuickSightConfiguration {
    string ClientNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.property.clientNamespace">ClientNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_namespace QbusinessApplication#client_namespace}. |

---

##### `ClientNamespace`<sup>Optional</sup> <a name="ClientNamespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.property.clientNamespace"></a>

```csharp
public string ClientNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_namespace QbusinessApplication#client_namespace}.

---

### QbusinessApplicationTags <a name="QbusinessApplicationTags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#key QbusinessApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#value QbusinessApplication#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#key QbusinessApplication#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#value QbusinessApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessApplicationAttachmentsConfigurationOutputReference <a name="QbusinessApplicationAttachmentsConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationAttachmentsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resetAttachmentsControlMode">ResetAttachmentsControlMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachmentsControlMode` <a name="ResetAttachmentsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resetAttachmentsControlMode"></a>

```csharp
private void ResetAttachmentsControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlModeInput">AttachmentsControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlMode">AttachmentsControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentsControlModeInput`<sup>Optional</sup> <a name="AttachmentsControlModeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlModeInput"></a>

```csharp
public string AttachmentsControlModeInput { get; }
```

- *Type:* string

---

##### `AttachmentsControlMode`<sup>Required</sup> <a name="AttachmentsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlMode"></a>

```csharp
public string AttachmentsControlMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationAttachmentsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

---


### QbusinessApplicationAutoSubscriptionConfigurationOutputReference <a name="QbusinessApplicationAutoSubscriptionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationAutoSubscriptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetAutoSubscribe">ResetAutoSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetDefaultSubscriptionType">ResetDefaultSubscriptionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoSubscribe` <a name="ResetAutoSubscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetAutoSubscribe"></a>

```csharp
private void ResetAutoSubscribe()
```

##### `ResetDefaultSubscriptionType` <a name="ResetDefaultSubscriptionType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetDefaultSubscriptionType"></a>

```csharp
private void ResetDefaultSubscriptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribeInput">AutoSubscribeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionTypeInput">DefaultSubscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribe">AutoSubscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionType">DefaultSubscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoSubscribeInput`<sup>Optional</sup> <a name="AutoSubscribeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribeInput"></a>

```csharp
public string AutoSubscribeInput { get; }
```

- *Type:* string

---

##### `DefaultSubscriptionTypeInput`<sup>Optional</sup> <a name="DefaultSubscriptionTypeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionTypeInput"></a>

```csharp
public string DefaultSubscriptionTypeInput { get; }
```

- *Type:* string

---

##### `AutoSubscribe`<sup>Required</sup> <a name="AutoSubscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribe"></a>

```csharp
public string AutoSubscribe { get; }
```

- *Type:* string

---

##### `DefaultSubscriptionType`<sup>Required</sup> <a name="DefaultSubscriptionType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionType"></a>

```csharp
public string DefaultSubscriptionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationAutoSubscriptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

---


### QbusinessApplicationEncryptionConfigurationOutputReference <a name="QbusinessApplicationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

---


### QbusinessApplicationPersonalizationConfigurationOutputReference <a name="QbusinessApplicationPersonalizationConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationPersonalizationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resetPersonalizationControlMode">ResetPersonalizationControlMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersonalizationControlMode` <a name="ResetPersonalizationControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resetPersonalizationControlMode"></a>

```csharp
private void ResetPersonalizationControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlModeInput">PersonalizationControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlMode">PersonalizationControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PersonalizationControlModeInput`<sup>Optional</sup> <a name="PersonalizationControlModeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlModeInput"></a>

```csharp
public string PersonalizationControlModeInput { get; }
```

- *Type:* string

---

##### `PersonalizationControlMode`<sup>Required</sup> <a name="PersonalizationControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlMode"></a>

```csharp
public string PersonalizationControlMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationPersonalizationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

---


### QbusinessApplicationQAppsConfigurationOutputReference <a name="QbusinessApplicationQAppsConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationQAppsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resetQAppsControlMode">ResetQAppsControlMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQAppsControlMode` <a name="ResetQAppsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resetQAppsControlMode"></a>

```csharp
private void ResetQAppsControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlModeInput">QAppsControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlMode">QAppsControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QAppsControlModeInput`<sup>Optional</sup> <a name="QAppsControlModeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlModeInput"></a>

```csharp
public string QAppsControlModeInput { get; }
```

- *Type:* string

---

##### `QAppsControlMode`<sup>Required</sup> <a name="QAppsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlMode"></a>

```csharp
public string QAppsControlMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationQAppsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

---


### QbusinessApplicationQuickSightConfigurationOutputReference <a name="QbusinessApplicationQuickSightConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationQuickSightConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resetClientNamespace">ResetClientNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientNamespace` <a name="ResetClientNamespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resetClientNamespace"></a>

```csharp
private void ResetClientNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespaceInput">ClientNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespace">ClientNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientNamespaceInput`<sup>Optional</sup> <a name="ClientNamespaceInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespaceInput"></a>

```csharp
public string ClientNamespaceInput { get; }
```

- *Type:* string

---

##### `ClientNamespace`<sup>Required</sup> <a name="ClientNamespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespace"></a>

```csharp
public string ClientNamespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationQuickSightConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

---


### QbusinessApplicationTagsList <a name="QbusinessApplicationTagsList" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get"></a>

```csharp
private QbusinessApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>[]

---


### QbusinessApplicationTagsOutputReference <a name="QbusinessApplicationTagsOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QbusinessApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QbusinessApplicationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>

---



