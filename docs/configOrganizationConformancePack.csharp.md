# `configOrganizationConformancePack` Submodule <a name="`configOrganizationConformancePack` Submodule" id="@cdktn/provider-awscc.configOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConformancePack <a name="ConfigOrganizationConformancePack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack awscc_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePack(Construct Scope, string Id, ConfigOrganizationConformancePackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig">ConfigOrganizationConformancePackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig">ConfigOrganizationConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters">PutConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetConformancePackInputParameters">ResetConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket">ResetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix">ResetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri">ResetTemplateS3Uri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConformancePackInputParameters` <a name="PutConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters"></a>

```csharp
private void PutConformancePackInputParameters(IResolvable|ConfigOrganizationConformancePackConformancePackInputParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags"></a>

```csharp
private void PutTags(IResolvable|ConfigOrganizationConformancePackTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>[]

---

##### `ResetConformancePackInputParameters` <a name="ResetConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetConformancePackInputParameters"></a>

```csharp
private void ResetConformancePackInputParameters()
```

##### `ResetDeliveryS3Bucket` <a name="ResetDeliveryS3Bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket"></a>

```csharp
private void ResetDeliveryS3Bucket()
```

##### `ResetDeliveryS3KeyPrefix` <a name="ResetDeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix"></a>

```csharp
private void ResetDeliveryS3KeyPrefix()
```

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts"></a>

```csharp
private void ResetExcludedAccounts()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody"></a>

```csharp
private void ResetTemplateBody()
```

##### `ResetTemplateS3Uri` <a name="ResetTemplateS3Uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri"></a>

```csharp
private void ResetTemplateS3Uri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigOrganizationConformancePack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigOrganizationConformancePack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigOrganizationConformancePack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConfigOrganizationConformancePack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigOrganizationConformancePack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigOrganizationConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParameters">ConformancePackInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList">ConfigOrganizationConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackArn">OrganizationConformancePackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList">ConfigOrganizationConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParametersInput">ConformancePackInputParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput">DeliveryS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput">DeliveryS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackNameInput">OrganizationConformancePackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput">TemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput">TemplateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket">DeliveryS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">DeliveryS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackName">OrganizationConformancePackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody">TemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri">TemplateS3Uri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConformancePackInputParameters`<sup>Required</sup> <a name="ConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParameters"></a>

```csharp
public ConfigOrganizationConformancePackConformancePackInputParametersList ConformancePackInputParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList">ConfigOrganizationConformancePackConformancePackInputParametersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationConformancePackArn`<sup>Required</sup> <a name="OrganizationConformancePackArn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackArn"></a>

```csharp
public string OrganizationConformancePackArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tags"></a>

```csharp
public ConfigOrganizationConformancePackTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList">ConfigOrganizationConformancePackTagsList</a>

---

##### `ConformancePackInputParametersInput`<sup>Optional</sup> <a name="ConformancePackInputParametersInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParametersInput"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackConformancePackInputParameters[] ConformancePackInputParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>[]

---

##### `DeliveryS3BucketInput`<sup>Optional</sup> <a name="DeliveryS3BucketInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput"></a>

```csharp
public string DeliveryS3BucketInput { get; }
```

- *Type:* string

---

##### `DeliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="DeliveryS3KeyPrefixInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput"></a>

```csharp
public string DeliveryS3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput"></a>

```csharp
public string[] ExcludedAccountsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationConformancePackNameInput`<sup>Optional</sup> <a name="OrganizationConformancePackNameInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackNameInput"></a>

```csharp
public string OrganizationConformancePackNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tagsInput"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>[]

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput"></a>

```csharp
public string TemplateBodyInput { get; }
```

- *Type:* string

---

##### `TemplateS3UriInput`<sup>Optional</sup> <a name="TemplateS3UriInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput"></a>

```csharp
public string TemplateS3UriInput { get; }
```

- *Type:* string

---

##### `DeliveryS3Bucket`<sup>Required</sup> <a name="DeliveryS3Bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```csharp
public string DeliveryS3Bucket { get; }
```

- *Type:* string

---

##### `DeliveryS3KeyPrefix`<sup>Required</sup> <a name="DeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```csharp
public string DeliveryS3KeyPrefix { get; }
```

- *Type:* string

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; }
```

- *Type:* string[]

---

##### `OrganizationConformancePackName`<sup>Required</sup> <a name="OrganizationConformancePackName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackName"></a>

```csharp
public string OrganizationConformancePackName { get; }
```

- *Type:* string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody"></a>

```csharp
public string TemplateBody { get; }
```

- *Type:* string

---

##### `TemplateS3Uri`<sup>Required</sup> <a name="TemplateS3Uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri"></a>

```csharp
public string TemplateS3Uri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConformancePackConfig <a name="ConfigOrganizationConformancePackConfig" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OrganizationConformancePackName,
    IResolvable|ConfigOrganizationConformancePackConformancePackInputParameters[] ConformancePackInputParameters = null,
    string DeliveryS3Bucket = null,
    string DeliveryS3KeyPrefix = null,
    string[] ExcludedAccounts = null,
    IResolvable|ConfigOrganizationConformancePackTags[] Tags = null,
    string TemplateBody = null,
    string TemplateS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.organizationConformancePackName">OrganizationConformancePackName</a></code> | <code>string</code> | The name of the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.conformancePackInputParameters">ConformancePackInputParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>[]</code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket">DeliveryS3Bucket</a></code> | <code>string</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix">DeliveryS3KeyPrefix</a></code> | <code>string</code> | The prefix for the delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>[]</code> | The tags for the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody">TemplateBody</a></code> | <code>string</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri">TemplateS3Uri</a></code> | <code>string</code> | Location of file containing the template body. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OrganizationConformancePackName`<sup>Required</sup> <a name="OrganizationConformancePackName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.organizationConformancePackName"></a>

```csharp
public string OrganizationConformancePackName { get; set; }
```

- *Type:* string

The name of the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}

---

##### `ConformancePackInputParameters`<sup>Optional</sup> <a name="ConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.conformancePackInputParameters"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackConformancePackInputParameters[] ConformancePackInputParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>[]

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}

---

##### `DeliveryS3Bucket`<sup>Optional</sup> <a name="DeliveryS3Bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket"></a>

```csharp
public string DeliveryS3Bucket { get; set; }
```

- *Type:* string

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}

---

##### `DeliveryS3KeyPrefix`<sup>Optional</sup> <a name="DeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```csharp
public string DeliveryS3KeyPrefix { get; set; }
```

- *Type:* string

The prefix for the delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; set; }
```

- *Type:* string[]

A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.tags"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>[]

The tags for the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#tags ConfigOrganizationConformancePack#tags}

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody"></a>

```csharp
public string TemplateBody { get; set; }
```

- *Type:* string

A string containing full conformance pack template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}

---

##### `TemplateS3Uri`<sup>Optional</sup> <a name="TemplateS3Uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri"></a>

```csharp
public string TemplateS3Uri { get; set; }
```

- *Type:* string

Location of file containing the template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}

---

### ConfigOrganizationConformancePackConformancePackInputParameters <a name="ConfigOrganizationConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePackConformancePackInputParameters {
    string ParameterName = null,
    string ParameterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterName">ParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterValue">ParameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}.

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterValue"></a>

```csharp
public string ParameterValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}.

---

### ConfigOrganizationConformancePackTags <a name="ConfigOrganizationConformancePackTags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePackTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#key ConfigOrganizationConformancePack#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_organization_conformance_pack#value ConfigOrganizationConformancePack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConformancePackConformancePackInputParametersList <a name="ConfigOrganizationConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePackConformancePackInputParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get"></a>

```csharp
private ConfigOrganizationConformancePackConformancePackInputParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.internalValue"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackConformancePackInputParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>[]

---


### ConfigOrganizationConformancePackConformancePackInputParametersOutputReference <a name="ConfigOrganizationConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePackConformancePackInputParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterName"></a>

```csharp
private void ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterValue"></a>

```csharp
private void ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput"></a>

```csharp
public string ParameterValueInput { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackConformancePackInputParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>

---


### ConfigOrganizationConformancePackTagsList <a name="ConfigOrganizationConformancePackTagsList" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePackTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get"></a>

```csharp
private ConfigOrganizationConformancePackTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>[]

---


### ConfigOrganizationConformancePackTagsOutputReference <a name="ConfigOrganizationConformancePackTagsOutputReference" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConfigOrganizationConformancePackTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigOrganizationConformancePackTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>

---



