# `iotfleetwiseSignalCatalog` Submodule <a name="`iotfleetwiseSignalCatalog` Submodule" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseSignalCatalog <a name="IotfleetwiseSignalCatalog" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalog(Construct Scope, string Id, IotfleetwiseSignalCatalogConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig">IotfleetwiseSignalCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig">IotfleetwiseSignalCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts">PutNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes">PutNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodeCounts">ResetNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodes">ResetNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNodeCounts` <a name="PutNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts"></a>

```csharp
private void PutNodeCounts(IotfleetwiseSignalCatalogNodeCounts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

---

##### `PutNodes` <a name="PutNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes"></a>

```csharp
private void PutNodes(IResolvable|IotfleetwiseSignalCatalogNodes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags"></a>

```csharp
private void PutTags(IResolvable|IotfleetwiseSignalCatalogTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNodeCounts` <a name="ResetNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodeCounts"></a>

```csharp
private void ResetNodeCounts()
```

##### `ResetNodes` <a name="ResetNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodes"></a>

```csharp
private void ResetNodes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseSignalCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseSignalCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseSignalCatalog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseSignalCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotfleetwiseSignalCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotfleetwiseSignalCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseSignalCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lastModificationTime">LastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCounts">NodeCounts</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference">IotfleetwiseSignalCatalogNodeCountsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodes">Nodes</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList">IotfleetwiseSignalCatalogNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList">IotfleetwiseSignalCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCountsInput">NodeCountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodesInput">NodesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lastModificationTime"></a>

```csharp
public string LastModificationTime { get; }
```

- *Type:* string

---

##### `NodeCounts`<sup>Required</sup> <a name="NodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCounts"></a>

```csharp
public IotfleetwiseSignalCatalogNodeCountsOutputReference NodeCounts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference">IotfleetwiseSignalCatalogNodeCountsOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodes"></a>

```csharp
public IotfleetwiseSignalCatalogNodesList Nodes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList">IotfleetwiseSignalCatalogNodesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tags"></a>

```csharp
public IotfleetwiseSignalCatalogTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList">IotfleetwiseSignalCatalogTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeCountsInput`<sup>Optional</sup> <a name="NodeCountsInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCountsInput"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodeCounts NodeCountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

---

##### `NodesInput`<sup>Optional</sup> <a name="NodesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodesInput"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodes[] NodesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tagsInput"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseSignalCatalogConfig <a name="IotfleetwiseSignalCatalogConfig" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    string Name = null,
    IotfleetwiseSignalCatalogNodeCounts NodeCounts = null,
    IResolvable|IotfleetwiseSignalCatalogNodes[] Nodes = null,
    IResolvable|IotfleetwiseSignalCatalogTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#name IotfleetwiseSignalCatalog#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodeCounts">NodeCounts</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#node_counts IotfleetwiseSignalCatalog#node_counts}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodes">Nodes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#nodes IotfleetwiseSignalCatalog#nodes}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#tags IotfleetwiseSignalCatalog#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#name IotfleetwiseSignalCatalog#name}.

---

##### `NodeCounts`<sup>Optional</sup> <a name="NodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodeCounts"></a>

```csharp
public IotfleetwiseSignalCatalogNodeCounts NodeCounts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#node_counts IotfleetwiseSignalCatalog#node_counts}.

---

##### `Nodes`<sup>Optional</sup> <a name="Nodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodes"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodes[] Nodes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#nodes IotfleetwiseSignalCatalog#nodes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.tags"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#tags IotfleetwiseSignalCatalog#tags}.

---

### IotfleetwiseSignalCatalogNodeCounts <a name="IotfleetwiseSignalCatalogNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodeCounts {

};
```


### IotfleetwiseSignalCatalogNodes <a name="IotfleetwiseSignalCatalogNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodes {
    IotfleetwiseSignalCatalogNodesActuator Actuator = null,
    IotfleetwiseSignalCatalogNodesAttribute Attribute = null,
    IotfleetwiseSignalCatalogNodesBranch Branch = null,
    IotfleetwiseSignalCatalogNodesSensor Sensor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.actuator">Actuator</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#actuator IotfleetwiseSignalCatalog#actuator}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#attribute IotfleetwiseSignalCatalog#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.branch">Branch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#branch IotfleetwiseSignalCatalog#branch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.sensor">Sensor</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#sensor IotfleetwiseSignalCatalog#sensor}. |

---

##### `Actuator`<sup>Optional</sup> <a name="Actuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.actuator"></a>

```csharp
public IotfleetwiseSignalCatalogNodesActuator Actuator { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#actuator IotfleetwiseSignalCatalog#actuator}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.attribute"></a>

```csharp
public IotfleetwiseSignalCatalogNodesAttribute Attribute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#attribute IotfleetwiseSignalCatalog#attribute}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.branch"></a>

```csharp
public IotfleetwiseSignalCatalogNodesBranch Branch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#branch IotfleetwiseSignalCatalog#branch}.

---

##### `Sensor`<sup>Optional</sup> <a name="Sensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.sensor"></a>

```csharp
public IotfleetwiseSignalCatalogNodesSensor Sensor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#sensor IotfleetwiseSignalCatalog#sensor}.

---

### IotfleetwiseSignalCatalogNodesActuator <a name="IotfleetwiseSignalCatalogNodesActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesActuator {
    string[] AllowedValues = null,
    string AssignedValue = null,
    string DataType = null,
    string Description = null,
    string FullyQualifiedName = null,
    double Max = null,
    double Min = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.assignedValue">AssignedValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.dataType">DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `AssignedValue`<sup>Optional</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.assignedValue"></a>

```csharp
public string AssignedValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogNodesAttribute <a name="IotfleetwiseSignalCatalogNodesAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesAttribute {
    string[] AllowedValues = null,
    string AssignedValue = null,
    string DataType = null,
    string DefaultValue = null,
    string Description = null,
    string FullyQualifiedName = null,
    double Max = null,
    double Min = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.assignedValue">AssignedValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.dataType">DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#default_value IotfleetwiseSignalCatalog#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `AssignedValue`<sup>Optional</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.assignedValue"></a>

```csharp
public string AssignedValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#default_value IotfleetwiseSignalCatalog#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogNodesBranch <a name="IotfleetwiseSignalCatalogNodesBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesBranch {
    string Description = null,
    string FullyQualifiedName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

### IotfleetwiseSignalCatalogNodesSensor <a name="IotfleetwiseSignalCatalogNodesSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesSensor {
    string[] AllowedValues = null,
    string DataType = null,
    string Description = null,
    string FullyQualifiedName = null,
    double Max = null,
    double Min = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.dataType">DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogTags <a name="IotfleetwiseSignalCatalogTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#key IotfleetwiseSignalCatalog#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#value IotfleetwiseSignalCatalog#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#key IotfleetwiseSignalCatalog#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_signal_catalog#value IotfleetwiseSignalCatalog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseSignalCatalogNodeCountsOutputReference <a name="IotfleetwiseSignalCatalogNodeCountsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodeCountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators">TotalActuators</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes">TotalAttributes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches">TotalBranches</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes">TotalNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors">TotalSensors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalActuators`<sup>Required</sup> <a name="TotalActuators" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators"></a>

```csharp
public double TotalActuators { get; }
```

- *Type:* double

---

##### `TotalAttributes`<sup>Required</sup> <a name="TotalAttributes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes"></a>

```csharp
public double TotalAttributes { get; }
```

- *Type:* double

---

##### `TotalBranches`<sup>Required</sup> <a name="TotalBranches" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches"></a>

```csharp
public double TotalBranches { get; }
```

- *Type:* double

---

##### `TotalNodes`<sup>Required</sup> <a name="TotalNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes"></a>

```csharp
public double TotalNodes { get; }
```

- *Type:* double

---

##### `TotalSensors`<sup>Required</sup> <a name="TotalSensors" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors"></a>

```csharp
public double TotalSensors { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodeCounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

---


### IotfleetwiseSignalCatalogNodesActuatorOutputReference <a name="IotfleetwiseSignalCatalogNodesActuatorOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesActuatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAssignedValue">ResetAssignedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetAssignedValue` <a name="ResetAssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAssignedValue"></a>

```csharp
private void ResetAssignedValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetFullyQualifiedName"></a>

```csharp
private void ResetFullyQualifiedName()
```

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValueInput">AssignedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue">AssignedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `AssignedValueInput`<sup>Optional</sup> <a name="AssignedValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValueInput"></a>

```csharp
public string AssignedValueInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedNameInput"></a>

```csharp
public string FullyQualifiedNameInput { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `AssignedValue`<sup>Required</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue"></a>

```csharp
public string AssignedValue { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesActuator InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

---


### IotfleetwiseSignalCatalogNodesAttributeOutputReference <a name="IotfleetwiseSignalCatalogNodesAttributeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAssignedValue">ResetAssignedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetAssignedValue` <a name="ResetAssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAssignedValue"></a>

```csharp
private void ResetAssignedValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetFullyQualifiedName"></a>

```csharp
private void ResetFullyQualifiedName()
```

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValueInput">AssignedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue">AssignedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `AssignedValueInput`<sup>Optional</sup> <a name="AssignedValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValueInput"></a>

```csharp
public string AssignedValueInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedNameInput"></a>

```csharp
public string FullyQualifiedNameInput { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `AssignedValue`<sup>Required</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue"></a>

```csharp
public string AssignedValue { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesAttribute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

---


### IotfleetwiseSignalCatalogNodesBranchOutputReference <a name="IotfleetwiseSignalCatalogNodesBranchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesBranchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetFullyQualifiedName"></a>

```csharp
private void ResetFullyQualifiedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedNameInput"></a>

```csharp
public string FullyQualifiedNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesBranch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

---


### IotfleetwiseSignalCatalogNodesList <a name="IotfleetwiseSignalCatalogNodesList" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get"></a>

```csharp
private IotfleetwiseSignalCatalogNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

---


### IotfleetwiseSignalCatalogNodesOutputReference <a name="IotfleetwiseSignalCatalogNodesOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator">PutActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch">PutBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor">PutSensor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetActuator">ResetActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetSensor">ResetSensor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActuator` <a name="PutActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator"></a>

```csharp
private void PutActuator(IotfleetwiseSignalCatalogNodesActuator Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute"></a>

```csharp
private void PutAttribute(IotfleetwiseSignalCatalogNodesAttribute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

---

##### `PutBranch` <a name="PutBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch"></a>

```csharp
private void PutBranch(IotfleetwiseSignalCatalogNodesBranch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

---

##### `PutSensor` <a name="PutSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor"></a>

```csharp
private void PutSensor(IotfleetwiseSignalCatalogNodesSensor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

---

##### `ResetActuator` <a name="ResetActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetActuator"></a>

```csharp
private void ResetActuator()
```

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetSensor` <a name="ResetSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetSensor"></a>

```csharp
private void ResetSensor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuator">Actuator</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference">IotfleetwiseSignalCatalogNodesActuatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference">IotfleetwiseSignalCatalogNodesAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branch">Branch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference">IotfleetwiseSignalCatalogNodesBranchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensor">Sensor</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference">IotfleetwiseSignalCatalogNodesSensorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuatorInput">ActuatorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attributeInput">AttributeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branchInput">BranchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensorInput">SensorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actuator`<sup>Required</sup> <a name="Actuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuator"></a>

```csharp
public IotfleetwiseSignalCatalogNodesActuatorOutputReference Actuator { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference">IotfleetwiseSignalCatalogNodesActuatorOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attribute"></a>

```csharp
public IotfleetwiseSignalCatalogNodesAttributeOutputReference Attribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference">IotfleetwiseSignalCatalogNodesAttributeOutputReference</a>

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branch"></a>

```csharp
public IotfleetwiseSignalCatalogNodesBranchOutputReference Branch { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference">IotfleetwiseSignalCatalogNodesBranchOutputReference</a>

---

##### `Sensor`<sup>Required</sup> <a name="Sensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensor"></a>

```csharp
public IotfleetwiseSignalCatalogNodesSensorOutputReference Sensor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference">IotfleetwiseSignalCatalogNodesSensorOutputReference</a>

---

##### `ActuatorInput`<sup>Optional</sup> <a name="ActuatorInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuatorInput"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesActuator ActuatorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attributeInput"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesAttribute AttributeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branchInput"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesBranch BranchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

---

##### `SensorInput`<sup>Optional</sup> <a name="SensorInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensorInput"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesSensor SensorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>

---


### IotfleetwiseSignalCatalogNodesSensorOutputReference <a name="IotfleetwiseSignalCatalogNodesSensorOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogNodesSensorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetFullyQualifiedName"></a>

```csharp
private void ResetFullyQualifiedName()
```

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedNameInput"></a>

```csharp
public string FullyQualifiedNameInput { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogNodesSensor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

---


### IotfleetwiseSignalCatalogTagsList <a name="IotfleetwiseSignalCatalogTagsList" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get"></a>

```csharp
private IotfleetwiseSignalCatalogTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

---


### IotfleetwiseSignalCatalogTagsOutputReference <a name="IotfleetwiseSignalCatalogTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseSignalCatalogTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseSignalCatalogTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>

---



