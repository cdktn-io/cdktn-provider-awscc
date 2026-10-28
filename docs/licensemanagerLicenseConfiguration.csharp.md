# `licensemanagerLicenseConfiguration` Submodule <a name="`licensemanagerLicenseConfiguration` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseConfiguration <a name="LicensemanagerLicenseConfiguration" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration awscc_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfiguration(Construct Scope, string Id, LicensemanagerLicenseConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList">PutProductInformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDisassociateWhenNotFound">ResetDisassociateWhenNotFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount">ResetLicenseCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit">ResetLicenseCountHardLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseExpiry">ResetLicenseExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules">ResetLicenseRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetProductInformationList">ResetProductInformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProductInformationList` <a name="PutProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList"></a>

```csharp
private void PutProductInformationList(IResolvable|LicensemanagerLicenseConfigurationProductInformationListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|LicensemanagerLicenseConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisassociateWhenNotFound` <a name="ResetDisassociateWhenNotFound" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDisassociateWhenNotFound"></a>

```csharp
private void ResetDisassociateWhenNotFound()
```

##### `ResetLicenseCount` <a name="ResetLicenseCount" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount"></a>

```csharp
private void ResetLicenseCount()
```

##### `ResetLicenseCountHardLimit` <a name="ResetLicenseCountHardLimit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit"></a>

```csharp
private void ResetLicenseCountHardLimit()
```

##### `ResetLicenseExpiry` <a name="ResetLicenseExpiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseExpiry"></a>

```csharp
private void ResetLicenseExpiry()
```

##### `ResetLicenseRules` <a name="ResetLicenseRules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules"></a>

```csharp
private void ResetLicenseRules()
```

##### `ResetProductInformationList` <a name="ResetProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetProductInformationList"></a>

```csharp
private void ResetProductInformationList()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicenseConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicenseConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicenseConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicenseConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerLicenseConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerLicenseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationId">LicenseConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationList">ProductInformationList</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList">LicensemanagerLicenseConfigurationProductInformationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList">LicensemanagerLicenseConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFoundInput">DisassociateWhenNotFoundInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput">LicenseCountHardLimitInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput">LicenseCountingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput">LicenseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiryInput">LicenseExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput">LicenseRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationListInput">ProductInformationListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFound">DisassociateWhenNotFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount">LicenseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit">LicenseCountHardLimit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType">LicenseCountingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiry">LicenseExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules">LicenseRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationArn"></a>

```csharp
public string LicenseConfigurationArn { get; }
```

- *Type:* string

---

##### `LicenseConfigurationId`<sup>Required</sup> <a name="LicenseConfigurationId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationId"></a>

```csharp
public string LicenseConfigurationId { get; }
```

- *Type:* string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ProductInformationList`<sup>Required</sup> <a name="ProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationList"></a>

```csharp
public LicensemanagerLicenseConfigurationProductInformationListStructList ProductInformationList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList">LicensemanagerLicenseConfigurationProductInformationListStructList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags"></a>

```csharp
public LicensemanagerLicenseConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList">LicensemanagerLicenseConfigurationTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisassociateWhenNotFoundInput`<sup>Optional</sup> <a name="DisassociateWhenNotFoundInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFoundInput"></a>

```csharp
public bool|IResolvable DisassociateWhenNotFoundInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseCountHardLimitInput`<sup>Optional</sup> <a name="LicenseCountHardLimitInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput"></a>

```csharp
public bool|IResolvable LicenseCountHardLimitInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseCountingTypeInput`<sup>Optional</sup> <a name="LicenseCountingTypeInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput"></a>

```csharp
public string LicenseCountingTypeInput { get; }
```

- *Type:* string

---

##### `LicenseCountInput`<sup>Optional</sup> <a name="LicenseCountInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput"></a>

```csharp
public double LicenseCountInput { get; }
```

- *Type:* double

---

##### `LicenseExpiryInput`<sup>Optional</sup> <a name="LicenseExpiryInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiryInput"></a>

```csharp
public double LicenseExpiryInput { get; }
```

- *Type:* double

---

##### `LicenseRulesInput`<sup>Optional</sup> <a name="LicenseRulesInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput"></a>

```csharp
public string[] LicenseRulesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductInformationListInput`<sup>Optional</sup> <a name="ProductInformationListInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationListInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListStruct[] ProductInformationListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisassociateWhenNotFound`<sup>Required</sup> <a name="DisassociateWhenNotFound" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFound"></a>

```csharp
public bool|IResolvable DisassociateWhenNotFound { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount"></a>

```csharp
public double LicenseCount { get; }
```

- *Type:* double

---

##### `LicenseCountHardLimit`<sup>Required</sup> <a name="LicenseCountHardLimit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```csharp
public bool|IResolvable LicenseCountHardLimit { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseCountingType`<sup>Required</sup> <a name="LicenseCountingType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```csharp
public string LicenseCountingType { get; }
```

- *Type:* string

---

##### `LicenseExpiry`<sup>Required</sup> <a name="LicenseExpiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiry"></a>

```csharp
public double LicenseExpiry { get; }
```

- *Type:* double

---

##### `LicenseRules`<sup>Required</sup> <a name="LicenseRules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules"></a>

```csharp
public string[] LicenseRules { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfigurationConfig <a name="LicensemanagerLicenseConfigurationConfig" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LicenseCountingType,
    string Name,
    string Description = null,
    bool|IResolvable DisassociateWhenNotFound = null,
    double LicenseCount = null,
    bool|IResolvable LicenseCountHardLimit = null,
    double LicenseExpiry = null,
    string[] LicenseRules = null,
    IResolvable|LicensemanagerLicenseConfigurationProductInformationListStruct[] ProductInformationList = null,
    IResolvable|LicensemanagerLicenseConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType">LicenseCountingType</a></code> | <code>string</code> | Dimension used to track the license inventory. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Name of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description">Description</a></code> | <code>string</code> | Description of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.disassociateWhenNotFound">DisassociateWhenNotFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, disassociates a resource when software is uninstalled. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount">LicenseCount</a></code> | <code>double</code> | Number of licenses managed by the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit">LicenseCountHardLimit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseExpiry">LicenseExpiry</a></code> | <code>double</code> | License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules">LicenseRules</a></code> | <code>string[]</code> | License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.productInformationList">ProductInformationList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>[]</code> | Product information. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>[]</code> | Tags to add to the license configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LicenseCountingType`<sup>Required</sup> <a name="LicenseCountingType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType"></a>

```csharp
public string LicenseCountingType { get; set; }
```

- *Type:* string

Dimension used to track the license inventory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}

---

##### `DisassociateWhenNotFound`<sup>Optional</sup> <a name="DisassociateWhenNotFound" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.disassociateWhenNotFound"></a>

```csharp
public bool|IResolvable DisassociateWhenNotFound { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, disassociates a resource when software is uninstalled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#disassociate_when_not_found LicensemanagerLicenseConfiguration#disassociate_when_not_found}

---

##### `LicenseCount`<sup>Optional</sup> <a name="LicenseCount" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount"></a>

```csharp
public double LicenseCount { get; set; }
```

- *Type:* double

Number of licenses managed by the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}

---

##### `LicenseCountHardLimit`<sup>Optional</sup> <a name="LicenseCountHardLimit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit"></a>

```csharp
public bool|IResolvable LicenseCountHardLimit { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}

---

##### `LicenseExpiry`<sup>Optional</sup> <a name="LicenseExpiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseExpiry"></a>

```csharp
public double LicenseExpiry { get; set; }
```

- *Type:* double

License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_expiry LicensemanagerLicenseConfiguration#license_expiry}

---

##### `LicenseRules`<sup>Optional</sup> <a name="LicenseRules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules"></a>

```csharp
public string[] LicenseRules { get; set; }
```

- *Type:* string[]

License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}

---

##### `ProductInformationList`<sup>Optional</sup> <a name="ProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.productInformationList"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListStruct[] ProductInformationList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>[]

Product information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_list LicensemanagerLicenseConfiguration#product_information_list}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>[]

Tags to add to the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}

---

### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct {
    string ProductInformationFilterComparator = null,
    string ProductInformationFilterName = null,
    string[] ProductInformationFilterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterComparator">ProductInformationFilterComparator</a></code> | <code>string</code> | Logical operator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterName">ProductInformationFilterName</a></code> | <code>string</code> | Filter name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterValue">ProductInformationFilterValue</a></code> | <code>string[]</code> | Filter value. |

---

##### `ProductInformationFilterComparator`<sup>Optional</sup> <a name="ProductInformationFilterComparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterComparator"></a>

```csharp
public string ProductInformationFilterComparator { get; set; }
```

- *Type:* string

Logical operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_comparator LicensemanagerLicenseConfiguration#product_information_filter_comparator}

---

##### `ProductInformationFilterName`<sup>Optional</sup> <a name="ProductInformationFilterName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterName"></a>

```csharp
public string ProductInformationFilterName { get; set; }
```

- *Type:* string

Filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_name LicensemanagerLicenseConfiguration#product_information_filter_name}

---

##### `ProductInformationFilterValue`<sup>Optional</sup> <a name="ProductInformationFilterValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterValue"></a>

```csharp
public string[] ProductInformationFilterValue { get; set; }
```

- *Type:* string[]

Filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_value LicensemanagerLicenseConfiguration#product_information_filter_value}

---

### LicensemanagerLicenseConfigurationProductInformationListStruct <a name="LicensemanagerLicenseConfigurationProductInformationListStruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationProductInformationListStruct {
    IResolvable|LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct[] ProductInformationFilterList = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.productInformationFilterList">ProductInformationFilterList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>[]</code> | A product information filter list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.resourceType">ResourceType</a></code> | <code>string</code> | Resource type. The possible values are SSM_MANAGED \| RDS. |

---

##### `ProductInformationFilterList`<sup>Optional</sup> <a name="ProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.productInformationFilterList"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct[] ProductInformationFilterList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>[]

A product information filter list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_list LicensemanagerLicenseConfiguration#product_information_filter_list}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Resource type. The possible values are SSM_MANAGED | RDS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#resource_type LicensemanagerLicenseConfiguration#resource_type}

---

### LicensemanagerLicenseConfigurationTags <a name="LicensemanagerLicenseConfigurationTags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#key LicensemanagerLicenseConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#value LicensemanagerLicenseConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#key LicensemanagerLicenseConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#value LicensemanagerLicenseConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get"></a>

```csharp
private LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>[]

---


### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterComparator">ResetProductInformationFilterComparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterName">ResetProductInformationFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterValue">ResetProductInformationFilterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProductInformationFilterComparator` <a name="ResetProductInformationFilterComparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterComparator"></a>

```csharp
private void ResetProductInformationFilterComparator()
```

##### `ResetProductInformationFilterName` <a name="ResetProductInformationFilterName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterName"></a>

```csharp
private void ResetProductInformationFilterName()
```

##### `ResetProductInformationFilterValue` <a name="ResetProductInformationFilterValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterValue"></a>

```csharp
private void ResetProductInformationFilterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparatorInput">ProductInformationFilterComparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterNameInput">ProductInformationFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValueInput">ProductInformationFilterValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator">ProductInformationFilterComparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName">ProductInformationFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue">ProductInformationFilterValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProductInformationFilterComparatorInput`<sup>Optional</sup> <a name="ProductInformationFilterComparatorInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparatorInput"></a>

```csharp
public string ProductInformationFilterComparatorInput { get; }
```

- *Type:* string

---

##### `ProductInformationFilterNameInput`<sup>Optional</sup> <a name="ProductInformationFilterNameInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterNameInput"></a>

```csharp
public string ProductInformationFilterNameInput { get; }
```

- *Type:* string

---

##### `ProductInformationFilterValueInput`<sup>Optional</sup> <a name="ProductInformationFilterValueInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValueInput"></a>

```csharp
public string[] ProductInformationFilterValueInput { get; }
```

- *Type:* string[]

---

##### `ProductInformationFilterComparator`<sup>Required</sup> <a name="ProductInformationFilterComparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator"></a>

```csharp
public string ProductInformationFilterComparator { get; }
```

- *Type:* string

---

##### `ProductInformationFilterName`<sup>Required</sup> <a name="ProductInformationFilterName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName"></a>

```csharp
public string ProductInformationFilterName { get; }
```

- *Type:* string

---

##### `ProductInformationFilterValue`<sup>Required</sup> <a name="ProductInformationFilterValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue"></a>

```csharp
public string[] ProductInformationFilterValue { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>

---


### LicensemanagerLicenseConfigurationProductInformationListStructList <a name="LicensemanagerLicenseConfigurationProductInformationListStructList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationProductInformationListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get"></a>

```csharp
private LicensemanagerLicenseConfigurationProductInformationListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>[]

---


### LicensemanagerLicenseConfigurationProductInformationListStructOutputReference <a name="LicensemanagerLicenseConfigurationProductInformationListStructOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationProductInformationListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList">PutProductInformationFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetProductInformationFilterList">ResetProductInformationFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProductInformationFilterList` <a name="PutProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList"></a>

```csharp
private void PutProductInformationFilterList(IResolvable|LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>[]

---

##### `ResetProductInformationFilterList` <a name="ResetProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetProductInformationFilterList"></a>

```csharp
private void ResetProductInformationFilterList()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList">ProductInformationFilterList</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterListInput">ProductInformationFilterListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProductInformationFilterList`<sup>Required</sup> <a name="ProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList"></a>

```csharp
public LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList ProductInformationFilterList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a>

---

##### `ProductInformationFilterListInput`<sup>Optional</sup> <a name="ProductInformationFilterListInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterListInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct[] ProductInformationFilterListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationProductInformationListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>

---


### LicensemanagerLicenseConfigurationTagsList <a name="LicensemanagerLicenseConfigurationTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get"></a>

```csharp
private LicensemanagerLicenseConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>[]

---


### LicensemanagerLicenseConfigurationTagsOutputReference <a name="LicensemanagerLicenseConfigurationTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>

---



