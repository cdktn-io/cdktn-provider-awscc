# `licensemanagerLicense` Submodule <a name="`licensemanagerLicense` Submodule" id="@cdktn/provider-awscc.licensemanagerLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicense <a name="LicensemanagerLicense" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license awscc_licensemanager_license}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicense(Construct Scope, string Id, LicensemanagerLicenseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig">LicensemanagerLicenseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig">LicensemanagerLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration">PutConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements">PutEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer">PutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata">PutLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity">PutValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata">ResetLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConsumptionConfiguration` <a name="PutConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration"></a>

```csharp
private void PutConsumptionConfiguration(LicensemanagerLicenseConsumptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `PutEntitlements` <a name="PutEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements"></a>

```csharp
private void PutEntitlements(IResolvable|LicensemanagerLicenseEntitlements[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

---

##### `PutIssuer` <a name="PutIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer"></a>

```csharp
private void PutIssuer(LicensemanagerLicenseIssuer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `PutLicenseMetadata` <a name="PutLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata"></a>

```csharp
private void PutLicenseMetadata(IResolvable|LicensemanagerLicenseLicenseMetadata[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags"></a>

```csharp
private void PutTags(IResolvable|LicensemanagerLicenseTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

---

##### `PutValidity` <a name="PutValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity"></a>

```csharp
private void PutValidity(LicensemanagerLicenseValidity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `ResetLicenseMetadata` <a name="ResetLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata"></a>

```csharp
private void ResetLicenseMetadata()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicense.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicense.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicense.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerLicense.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerLicense to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration">ConsumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements">Entitlements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer">Issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn">LicenseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata">LicenseMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity">Validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput">BeneficiaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput">ConsumptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput">EntitlementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput">HomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput">IssuerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput">LicenseMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput">LicenseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput">ProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput">ProductSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput">ValidityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary">Beneficiary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion">HomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName">LicenseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku">ProductSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConsumptionConfiguration`<sup>Required</sup> <a name="ConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration"></a>

```csharp
public LicensemanagerLicenseConsumptionConfigurationOutputReference ConsumptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a>

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements"></a>

```csharp
public LicensemanagerLicenseEntitlementsList Entitlements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer"></a>

```csharp
public LicensemanagerLicenseIssuerOutputReference Issuer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a>

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn"></a>

```csharp
public string LicenseArn { get; }
```

- *Type:* string

---

##### `LicenseMetadata`<sup>Required</sup> <a name="LicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata"></a>

```csharp
public LicensemanagerLicenseLicenseMetadataList LicenseMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags"></a>

```csharp
public LicensemanagerLicenseTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a>

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity"></a>

```csharp
public LicensemanagerLicenseValidityOutputReference Validity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `BeneficiaryInput`<sup>Optional</sup> <a name="BeneficiaryInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput"></a>

```csharp
public string BeneficiaryInput { get; }
```

- *Type:* string

---

##### `ConsumptionConfigurationInput`<sup>Optional</sup> <a name="ConsumptionConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseConsumptionConfiguration ConsumptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `EntitlementsInput`<sup>Optional</sup> <a name="EntitlementsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseEntitlements[] EntitlementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

---

##### `HomeRegionInput`<sup>Optional</sup> <a name="HomeRegionInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput"></a>

```csharp
public string HomeRegionInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseIssuer IssuerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `LicenseMetadataInput`<sup>Optional</sup> <a name="LicenseMetadataInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseLicenseMetadata[] LicenseMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

---

##### `LicenseNameInput`<sup>Optional</sup> <a name="LicenseNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput"></a>

```csharp
public string LicenseNameInput { get; }
```

- *Type:* string

---

##### `ProductNameInput`<sup>Optional</sup> <a name="ProductNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput"></a>

```csharp
public string ProductNameInput { get; }
```

- *Type:* string

---

##### `ProductSkuInput`<sup>Optional</sup> <a name="ProductSkuInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput"></a>

```csharp
public string ProductSkuInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

---

##### `ValidityInput`<sup>Optional</sup> <a name="ValidityInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseValidity ValidityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `Beneficiary`<sup>Required</sup> <a name="Beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary"></a>

```csharp
public string Beneficiary { get; }
```

- *Type:* string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion"></a>

```csharp
public string HomeRegion { get; }
```

- *Type:* string

---

##### `LicenseName`<sup>Required</sup> <a name="LicenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName"></a>

```csharp
public string LicenseName { get; }
```

- *Type:* string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `ProductSku`<sup>Required</sup> <a name="ProductSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku"></a>

```csharp
public string ProductSku { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfig <a name="LicensemanagerLicenseConfig" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Beneficiary,
    LicensemanagerLicenseConsumptionConfiguration ConsumptionConfiguration,
    IResolvable|LicensemanagerLicenseEntitlements[] Entitlements,
    string HomeRegion,
    LicensemanagerLicenseIssuer Issuer,
    string LicenseName,
    string ProductName,
    string ProductSku,
    LicensemanagerLicenseValidity Validity,
    IResolvable|LicensemanagerLicenseLicenseMetadata[] LicenseMetadata = null,
    string Status = null,
    IResolvable|LicensemanagerLicenseTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary">Beneficiary</a></code> | <code>string</code> | Beneficiary of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration">ConsumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements">Entitlements</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion">HomeRegion</a></code> | <code>string</code> | Home region for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer">Issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName">LicenseName</a></code> | <code>string</code> | Name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName">ProductName</a></code> | <code>string</code> | Product name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku">ProductSku</a></code> | <code>string</code> | ProductSKU of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity">Validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata">LicenseMetadata</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]</code> | A list of tags to attach. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Beneficiary`<sup>Required</sup> <a name="Beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary"></a>

```csharp
public string Beneficiary { get; set; }
```

- *Type:* string

Beneficiary of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#beneficiary LicensemanagerLicense#beneficiary}

---

##### `ConsumptionConfiguration`<sup>Required</sup> <a name="ConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration"></a>

```csharp
public LicensemanagerLicenseConsumptionConfiguration ConsumptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}.

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements"></a>

```csharp
public IResolvable|LicensemanagerLicenseEntitlements[] Entitlements { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}.

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion"></a>

```csharp
public string HomeRegion { get; set; }
```

- *Type:* string

Home region for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#home_region LicensemanagerLicense#home_region}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer"></a>

```csharp
public LicensemanagerLicenseIssuer Issuer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}.

---

##### `LicenseName`<sup>Required</sup> <a name="LicenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName"></a>

```csharp
public string LicenseName { get; set; }
```

- *Type:* string

Name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_name LicensemanagerLicense#license_name}

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName"></a>

```csharp
public string ProductName { get; set; }
```

- *Type:* string

Product name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_name LicensemanagerLicense#product_name}

---

##### `ProductSku`<sup>Required</sup> <a name="ProductSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku"></a>

```csharp
public string ProductSku { get; set; }
```

- *Type:* string

ProductSKU of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#product_sku LicensemanagerLicense#product_sku}

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity"></a>

```csharp
public LicensemanagerLicenseValidity Validity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}.

---

##### `LicenseMetadata`<sup>Optional</sup> <a name="LicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata"></a>

```csharp
public IResolvable|LicensemanagerLicenseLicenseMetadata[] LicenseMetadata { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags"></a>

```csharp
public IResolvable|LicensemanagerLicenseTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

A list of tags to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#tags LicensemanagerLicense#tags}

---

### LicensemanagerLicenseConsumptionConfiguration <a name="LicensemanagerLicenseConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConsumptionConfiguration {
    LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration BorrowConfiguration = null,
    LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration ProvisionalConfiguration = null,
    string RenewType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration">BorrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration">ProvisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType">RenewType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}. |

---

##### `BorrowConfiguration`<sup>Optional</sup> <a name="BorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration"></a>

```csharp
public LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration BorrowConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}.

---

##### `ProvisionalConfiguration`<sup>Optional</sup> <a name="ProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration"></a>

```csharp
public LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration ProvisionalConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}.

---

##### `RenewType`<sup>Optional</sup> <a name="RenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType"></a>

```csharp
public string RenewType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}.

---

### LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration {
    bool|IResolvable AllowEarlyCheckIn = null,
    double MaxTimeToLiveInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn">AllowEarlyCheckIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `AllowEarlyCheckIn`<sup>Optional</sup> <a name="AllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn"></a>

```csharp
public bool|IResolvable AllowEarlyCheckIn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}.

---

##### `MaxTimeToLiveInMinutes`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes"></a>

```csharp
public double MaxTimeToLiveInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration {
    double MaxTimeToLiveInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `MaxTimeToLiveInMinutes`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes"></a>

```csharp
public double MaxTimeToLiveInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseEntitlements <a name="LicensemanagerLicenseEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseEntitlements {
    string Name,
    string Unit,
    bool|IResolvable AllowCheckIn = null,
    double MaxCount = null,
    bool|IResolvable Overage = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn">AllowCheckIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount">MaxCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage">Overage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}.

---

##### `AllowCheckIn`<sup>Optional</sup> <a name="AllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn"></a>

```csharp
public bool|IResolvable AllowCheckIn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}.

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount"></a>

```csharp
public double MaxCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}.

---

##### `Overage`<sup>Optional</sup> <a name="Overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage"></a>

```csharp
public bool|IResolvable Overage { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseIssuer <a name="LicensemanagerLicenseIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseIssuer {
    string Name,
    string SignKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey">SignKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `SignKey`<sup>Optional</sup> <a name="SignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey"></a>

```csharp
public string SignKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}.

---

### LicensemanagerLicenseLicenseMetadata <a name="LicensemanagerLicenseLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseLicenseMetadata {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseTags <a name="LicensemanagerLicenseTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#key LicensemanagerLicense#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}

---

### LicensemanagerLicenseValidity <a name="LicensemanagerLicenseValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseValidity {
    string Begin,
    string End
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin">Begin</a></code> | <code>string</code> | Validity begin date for the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end">End</a></code> | <code>string</code> | Validity begin date for the license. |

---

##### `Begin`<sup>Required</sup> <a name="Begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin"></a>

```csharp
public string Begin { get; set; }
```

- *Type:* string

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#begin LicensemanagerLicense#begin}

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license#end LicensemanagerLicense#end}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn">ResetAllowEarlyCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes">ResetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowEarlyCheckIn` <a name="ResetAllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn"></a>

```csharp
private void ResetAllowEarlyCheckIn()
```

##### `ResetMaxTimeToLiveInMinutes` <a name="ResetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```csharp
private void ResetMaxTimeToLiveInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput">AllowEarlyCheckInInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">MaxTimeToLiveInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">AllowEarlyCheckIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowEarlyCheckInInput`<sup>Optional</sup> <a name="AllowEarlyCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput"></a>

```csharp
public bool|IResolvable AllowEarlyCheckInInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```csharp
public double MaxTimeToLiveInMinutesInput { get; }
```

- *Type:* double

---

##### `AllowEarlyCheckIn`<sup>Required</sup> <a name="AllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```csharp
public bool|IResolvable AllowEarlyCheckIn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```csharp
public double MaxTimeToLiveInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConsumptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration">PutBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration">PutProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration">ResetBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration">ResetProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType">ResetRenewType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBorrowConfiguration` <a name="PutBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration"></a>

```csharp
private void PutBorrowConfiguration(LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `PutProvisionalConfiguration` <a name="PutProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration"></a>

```csharp
private void PutProvisionalConfiguration(LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `ResetBorrowConfiguration` <a name="ResetBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration"></a>

```csharp
private void ResetBorrowConfiguration()
```

##### `ResetProvisionalConfiguration` <a name="ResetProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration"></a>

```csharp
private void ResetProvisionalConfiguration()
```

##### `ResetRenewType` <a name="ResetRenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType"></a>

```csharp
private void ResetRenewType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">BorrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">ProvisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput">BorrowConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput">ProvisionalConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput">RenewTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType">RenewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BorrowConfiguration`<sup>Required</sup> <a name="BorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```csharp
public LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference BorrowConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a>

---

##### `ProvisionalConfiguration`<sup>Required</sup> <a name="ProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```csharp
public LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference ProvisionalConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a>

---

##### `BorrowConfigurationInput`<sup>Optional</sup> <a name="BorrowConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration BorrowConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `ProvisionalConfigurationInput`<sup>Optional</sup> <a name="ProvisionalConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput"></a>

```csharp
public IResolvable|LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration ProvisionalConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `RenewTypeInput`<sup>Optional</sup> <a name="RenewTypeInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput"></a>

```csharp
public string RenewTypeInput { get; }
```

- *Type:* string

---

##### `RenewType`<sup>Required</sup> <a name="RenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```csharp
public string RenewType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConsumptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes">ResetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTimeToLiveInMinutes` <a name="ResetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```csharp
private void ResetMaxTimeToLiveInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">MaxTimeToLiveInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```csharp
public double MaxTimeToLiveInMinutesInput { get; }
```

- *Type:* double

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```csharp
public double MaxTimeToLiveInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### LicensemanagerLicenseEntitlementsList <a name="LicensemanagerLicenseEntitlementsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseEntitlementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get"></a>

```csharp
private LicensemanagerLicenseEntitlementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseEntitlements[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

---


### LicensemanagerLicenseEntitlementsOutputReference <a name="LicensemanagerLicenseEntitlementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseEntitlementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn">ResetAllowCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage">ResetOverage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCheckIn` <a name="ResetAllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn"></a>

```csharp
private void ResetAllowCheckIn()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount"></a>

```csharp
private void ResetMaxCount()
```

##### `ResetOverage` <a name="ResetOverage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage"></a>

```csharp
private void ResetOverage()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput">AllowCheckInInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput">MaxCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput">OverageInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn">AllowCheckIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount">MaxCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage">Overage</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCheckInInput`<sup>Optional</sup> <a name="AllowCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput"></a>

```csharp
public bool|IResolvable AllowCheckInInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput"></a>

```csharp
public double MaxCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverageInput`<sup>Optional</sup> <a name="OverageInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput"></a>

```csharp
public bool|IResolvable OverageInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AllowCheckIn`<sup>Required</sup> <a name="AllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```csharp
public bool|IResolvable AllowCheckIn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount"></a>

```csharp
public double MaxCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Overage`<sup>Required</sup> <a name="Overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage"></a>

```csharp
public bool|IResolvable Overage { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseEntitlements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>

---


### LicensemanagerLicenseIssuerOutputReference <a name="LicensemanagerLicenseIssuerOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseIssuerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey">ResetSignKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSignKey` <a name="ResetSignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey"></a>

```csharp
private void ResetSignKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput">SignKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey">SignKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SignKeyInput`<sup>Optional</sup> <a name="SignKeyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput"></a>

```csharp
public string SignKeyInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignKey`<sup>Required</sup> <a name="SignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey"></a>

```csharp
public string SignKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseIssuer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---


### LicensemanagerLicenseLicenseMetadataList <a name="LicensemanagerLicenseLicenseMetadataList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseLicenseMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get"></a>

```csharp
private LicensemanagerLicenseLicenseMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseLicenseMetadata[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

---


### LicensemanagerLicenseLicenseMetadataOutputReference <a name="LicensemanagerLicenseLicenseMetadataOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseLicenseMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseLicenseMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>

---


### LicensemanagerLicenseTagsList <a name="LicensemanagerLicenseTagsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get"></a>

```csharp
private LicensemanagerLicenseTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

---


### LicensemanagerLicenseTagsOutputReference <a name="LicensemanagerLicenseTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>

---


### LicensemanagerLicenseValidityOutputReference <a name="LicensemanagerLicenseValidityOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerLicenseValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput">BeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin">Begin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BeginInput`<sup>Optional</sup> <a name="BeginInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput"></a>

```csharp
public string BeginInput { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `Begin`<sup>Required</sup> <a name="Begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin"></a>

```csharp
public string Begin { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerLicenseValidity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---



