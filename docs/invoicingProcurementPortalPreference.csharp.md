# `invoicingProcurementPortalPreference` Submodule <a name="`invoicingProcurementPortalPreference` Submodule" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingProcurementPortalPreference <a name="InvoicingProcurementPortalPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreference(Construct Scope, string Id, InvoicingProcurementPortalPreferenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig">InvoicingProcurementPortalPreferenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig">InvoicingProcurementPortalPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts">PutContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference">PutEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference">PutTestEnvPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference">ResetEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint">ResetProcurementPortalInstanceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret">ResetProcurementPortalSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference">ResetTestEnvPreference</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContacts` <a name="PutContacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts"></a>

```csharp
private void PutContacts(IResolvable|InvoicingProcurementPortalPreferenceContacts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

---

##### `PutEinvoiceDeliveryPreference` <a name="PutEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference"></a>

```csharp
private void PutEinvoiceDeliveryPreference(InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---

##### `PutSelector` <a name="PutSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector"></a>

```csharp
private void PutSelector(InvoicingProcurementPortalPreferenceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags"></a>

```csharp
private void PutTags(IResolvable|InvoicingProcurementPortalPreferenceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

---

##### `PutTestEnvPreference` <a name="PutTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference"></a>

```csharp
private void PutTestEnvPreference(InvoicingProcurementPortalPreferenceTestEnvPreference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---

##### `ResetEinvoiceDeliveryPreference` <a name="ResetEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference"></a>

```csharp
private void ResetEinvoiceDeliveryPreference()
```

##### `ResetProcurementPortalInstanceEndpoint` <a name="ResetProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint"></a>

```csharp
private void ResetProcurementPortalInstanceEndpoint()
```

##### `ResetProcurementPortalSharedSecret` <a name="ResetProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret"></a>

```csharp
private void ResetProcurementPortalSharedSecret()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTestEnvPreference` <a name="ResetTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference"></a>

```csharp
private void ResetTestEnvPreference()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingProcurementPortalPreference.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingProcurementPortalPreference.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingProcurementPortalPreference.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingProcurementPortalPreference.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InvoicingProcurementPortalPreference to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InvoicingProcurementPortalPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the InvoicingProcurementPortalPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts">Contacts</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate">CreateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference">EinvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus">EinvoiceDeliveryPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate">LastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn">ProcurementPortalPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint">PurchaseOrderRetrievalEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus">PurchaseOrderRetrievalPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector">Selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference">TestEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput">BuyerDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput">BuyerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput">ContactsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput">EinvoiceDeliveryEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput">EinvoiceDeliveryPreferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput">ProcurementPortalInstanceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput">ProcurementPortalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput">ProcurementPortalSharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput">PurchaseOrderRetrievalEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput">SelectorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput">SupplierDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput">SupplierIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput">TestEnvPreferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain">BuyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier">BuyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled">EinvoiceDeliveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint">ProcurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName">ProcurementPortalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret">ProcurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled">PurchaseOrderRetrievalEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain">SupplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier">SupplierIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `Contacts`<sup>Required</sup> <a name="Contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts"></a>

```csharp
public InvoicingProcurementPortalPreferenceContactsList Contacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a>

---

##### `CreateDate`<sup>Required</sup> <a name="CreateDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate"></a>

```csharp
public string CreateDate { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryPreference`<sup>Required</sup> <a name="EinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference"></a>

```csharp
public InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference EinvoiceDeliveryPreference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a>

---

##### `EinvoiceDeliveryPreferenceStatus`<sup>Required</sup> <a name="EinvoiceDeliveryPreferenceStatus" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus"></a>

```csharp
public string EinvoiceDeliveryPreferenceStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdateDate`<sup>Required</sup> <a name="LastUpdateDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate"></a>

```csharp
public string LastUpdateDate { get; }
```

- *Type:* string

---

##### `ProcurementPortalPreferenceArn`<sup>Required</sup> <a name="ProcurementPortalPreferenceArn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn"></a>

```csharp
public string ProcurementPortalPreferenceArn { get; }
```

- *Type:* string

---

##### `PurchaseOrderRetrievalEndpoint`<sup>Required</sup> <a name="PurchaseOrderRetrievalEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint"></a>

```csharp
public string PurchaseOrderRetrievalEndpoint { get; }
```

- *Type:* string

---

##### `PurchaseOrderRetrievalPreferenceStatus`<sup>Required</sup> <a name="PurchaseOrderRetrievalPreferenceStatus" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus"></a>

```csharp
public string PurchaseOrderRetrievalPreferenceStatus { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector"></a>

```csharp
public InvoicingProcurementPortalPreferenceSelectorOutputReference Selector { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags"></a>

```csharp
public InvoicingProcurementPortalPreferenceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a>

---

##### `TestEnvPreference`<sup>Required</sup> <a name="TestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference"></a>

```csharp
public InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference TestEnvPreference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `BuyerDomainInput`<sup>Optional</sup> <a name="BuyerDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput"></a>

```csharp
public string BuyerDomainInput { get; }
```

- *Type:* string

---

##### `BuyerIdentifierInput`<sup>Optional</sup> <a name="BuyerIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput"></a>

```csharp
public string BuyerIdentifierInput { get; }
```

- *Type:* string

---

##### `ContactsInput`<sup>Optional</sup> <a name="ContactsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceContacts[] ContactsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

---

##### `EinvoiceDeliveryEnabledInput`<sup>Optional</sup> <a name="EinvoiceDeliveryEnabledInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput"></a>

```csharp
public bool|IResolvable EinvoiceDeliveryEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EinvoiceDeliveryPreferenceInput`<sup>Optional</sup> <a name="EinvoiceDeliveryPreferenceInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference EinvoiceDeliveryPreferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---

##### `ProcurementPortalInstanceEndpointInput`<sup>Optional</sup> <a name="ProcurementPortalInstanceEndpointInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput"></a>

```csharp
public string ProcurementPortalInstanceEndpointInput { get; }
```

- *Type:* string

---

##### `ProcurementPortalNameInput`<sup>Optional</sup> <a name="ProcurementPortalNameInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput"></a>

```csharp
public string ProcurementPortalNameInput { get; }
```

- *Type:* string

---

##### `ProcurementPortalSharedSecretInput`<sup>Optional</sup> <a name="ProcurementPortalSharedSecretInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput"></a>

```csharp
public string ProcurementPortalSharedSecretInput { get; }
```

- *Type:* string

---

##### `PurchaseOrderRetrievalEnabledInput`<sup>Optional</sup> <a name="PurchaseOrderRetrievalEnabledInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput"></a>

```csharp
public bool|IResolvable PurchaseOrderRetrievalEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceSelector SelectorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---

##### `SupplierDomainInput`<sup>Optional</sup> <a name="SupplierDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput"></a>

```csharp
public string SupplierDomainInput { get; }
```

- *Type:* string

---

##### `SupplierIdentifierInput`<sup>Optional</sup> <a name="SupplierIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput"></a>

```csharp
public string SupplierIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

---

##### `TestEnvPreferenceInput`<sup>Optional</sup> <a name="TestEnvPreferenceInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceTestEnvPreference TestEnvPreferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---

##### `BuyerDomain`<sup>Required</sup> <a name="BuyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain"></a>

```csharp
public string BuyerDomain { get; }
```

- *Type:* string

---

##### `BuyerIdentifier`<sup>Required</sup> <a name="BuyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier"></a>

```csharp
public string BuyerIdentifier { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryEnabled`<sup>Required</sup> <a name="EinvoiceDeliveryEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled"></a>

```csharp
public bool|IResolvable EinvoiceDeliveryEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProcurementPortalInstanceEndpoint`<sup>Required</sup> <a name="ProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint"></a>

```csharp
public string ProcurementPortalInstanceEndpoint { get; }
```

- *Type:* string

---

##### `ProcurementPortalName`<sup>Required</sup> <a name="ProcurementPortalName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName"></a>

```csharp
public string ProcurementPortalName { get; }
```

- *Type:* string

---

##### `ProcurementPortalSharedSecret`<sup>Required</sup> <a name="ProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret"></a>

```csharp
public string ProcurementPortalSharedSecret { get; }
```

- *Type:* string

---

##### `PurchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="PurchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled"></a>

```csharp
public bool|IResolvable PurchaseOrderRetrievalEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupplierDomain`<sup>Required</sup> <a name="SupplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain"></a>

```csharp
public string SupplierDomain { get; }
```

- *Type:* string

---

##### `SupplierIdentifier`<sup>Required</sup> <a name="SupplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier"></a>

```csharp
public string SupplierIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingProcurementPortalPreferenceConfig <a name="InvoicingProcurementPortalPreferenceConfig" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BuyerDomain,
    string BuyerIdentifier,
    IResolvable|InvoicingProcurementPortalPreferenceContacts[] Contacts,
    bool|IResolvable EinvoiceDeliveryEnabled,
    string ProcurementPortalName,
    bool|IResolvable PurchaseOrderRetrievalEnabled,
    string SupplierDomain,
    string SupplierIdentifier,
    InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference EinvoiceDeliveryPreference = null,
    string ProcurementPortalInstanceEndpoint = null,
    string ProcurementPortalSharedSecret = null,
    InvoicingProcurementPortalPreferenceSelector Selector = null,
    IResolvable|InvoicingProcurementPortalPreferenceTags[] Tags = null,
    InvoicingProcurementPortalPreferenceTestEnvPreference TestEnvPreference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain">BuyerDomain</a></code> | <code>string</code> | The domain identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier">BuyerIdentifier</a></code> | <code>string</code> | The unique identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts">Contacts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]</code> | List of contact information for portal administrators and technical contacts. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled">EinvoiceDeliveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether e-invoice delivery is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName">ProcurementPortalName</a></code> | <code>string</code> | The name of the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled">PurchaseOrderRetrievalEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether purchase order retrieval is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain">SupplierDomain</a></code> | <code>string</code> | The domain identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier">SupplierIdentifier</a></code> | <code>string</code> | The unique identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference">EinvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | Specifies the preferences for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint">ProcurementPortalInstanceEndpoint</a></code> | <code>string</code> | The endpoint URL where e-invoices are delivered to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret">ProcurementPortalSharedSecret</a></code> | <code>string</code> | The shared secret or authentication credential used for secure communication with the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector">Selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | Specifies criteria for selecting which invoices should be processed. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]</code> | The tags associated with this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference">TestEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | Configuration settings for the test environment of the procurement portal. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BuyerDomain`<sup>Required</sup> <a name="BuyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain"></a>

```csharp
public string BuyerDomain { get; set; }
```

- *Type:* string

The domain identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `BuyerIdentifier`<sup>Required</sup> <a name="BuyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier"></a>

```csharp
public string BuyerIdentifier { get; set; }
```

- *Type:* string

The unique identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `Contacts`<sup>Required</sup> <a name="Contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceContacts[] Contacts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

List of contact information for portal administrators and technical contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#contacts InvoicingProcurementPortalPreference#contacts}

---

##### `EinvoiceDeliveryEnabled`<sup>Required</sup> <a name="EinvoiceDeliveryEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled"></a>

```csharp
public bool|IResolvable EinvoiceDeliveryEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether e-invoice delivery is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_enabled InvoicingProcurementPortalPreference#einvoice_delivery_enabled}

---

##### `ProcurementPortalName`<sup>Required</sup> <a name="ProcurementPortalName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName"></a>

```csharp
public string ProcurementPortalName { get; set; }
```

- *Type:* string

The name of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_name InvoicingProcurementPortalPreference#procurement_portal_name}

---

##### `PurchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="PurchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled"></a>

```csharp
public bool|IResolvable PurchaseOrderRetrievalEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether purchase order retrieval is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_retrieval_enabled InvoicingProcurementPortalPreference#purchase_order_retrieval_enabled}

---

##### `SupplierDomain`<sup>Required</sup> <a name="SupplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain"></a>

```csharp
public string SupplierDomain { get; set; }
```

- *Type:* string

The domain identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `SupplierIdentifier`<sup>Required</sup> <a name="SupplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier"></a>

```csharp
public string SupplierIdentifier { get; set; }
```

- *Type:* string

The unique identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

##### `EinvoiceDeliveryPreference`<sup>Optional</sup> <a name="EinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference"></a>

```csharp
public InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference EinvoiceDeliveryPreference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

Specifies the preferences for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_preference InvoicingProcurementPortalPreference#einvoice_delivery_preference}

---

##### `ProcurementPortalInstanceEndpoint`<sup>Optional</sup> <a name="ProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint"></a>

```csharp
public string ProcurementPortalInstanceEndpoint { get; set; }
```

- *Type:* string

The endpoint URL where e-invoices are delivered to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `ProcurementPortalSharedSecret`<sup>Optional</sup> <a name="ProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret"></a>

```csharp
public string ProcurementPortalSharedSecret { get; set; }
```

- *Type:* string

The shared secret or authentication credential used for secure communication with the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector"></a>

```csharp
public InvoicingProcurementPortalPreferenceSelector Selector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

Specifies criteria for selecting which invoices should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#selector InvoicingProcurementPortalPreference#selector}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

The tags associated with this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#tags InvoicingProcurementPortalPreference#tags}

---

##### `TestEnvPreference`<sup>Optional</sup> <a name="TestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference"></a>

```csharp
public InvoicingProcurementPortalPreferenceTestEnvPreference TestEnvPreference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

Configuration settings for the test environment of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#test_env_preference InvoicingProcurementPortalPreference#test_env_preference}

---

### InvoicingProcurementPortalPreferenceContacts <a name="InvoicingProcurementPortalPreferenceContacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceContacts {
    string Email = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email">Email</a></code> | <code>string</code> | The email address of the contact person or role. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name">Name</a></code> | <code>string</code> | The name of the contact person or role. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#email InvoicingProcurementPortalPreference#email}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#name InvoicingProcurementPortalPreference#name}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference {
    string ConnectionTestingMethod = null,
    string EinvoiceDeliveryActivationDate = null,
    string[] EinvoiceDeliveryAttachmentTypes = null,
    string[] EinvoiceDeliveryDocumentTypes = null,
    string Protocol = null,
    IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[] PurchaseOrderDataSources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod">ConnectionTestingMethod</a></code> | <code>string</code> | The method to use for testing the connection to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate">EinvoiceDeliveryActivationDate</a></code> | <code>string</code> | The ISO 8601 date-time when e-invoice delivery should be activated. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes">EinvoiceDeliveryAttachmentTypes</a></code> | <code>string[]</code> | The types of attachments to include with the e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes">EinvoiceDeliveryDocumentTypes</a></code> | <code>string[]</code> | The types of e-invoice documents to be delivered. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol">Protocol</a></code> | <code>string</code> | The communication protocol to use for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources">PurchaseOrderDataSources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]</code> | The sources of purchase order data. |

---

##### `ConnectionTestingMethod`<sup>Optional</sup> <a name="ConnectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod"></a>

```csharp
public string ConnectionTestingMethod { get; set; }
```

- *Type:* string

The method to use for testing the connection to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#connection_testing_method InvoicingProcurementPortalPreference#connection_testing_method}

---

##### `EinvoiceDeliveryActivationDate`<sup>Optional</sup> <a name="EinvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate"></a>

```csharp
public string EinvoiceDeliveryActivationDate { get; set; }
```

- *Type:* string

The ISO 8601 date-time when e-invoice delivery should be activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_activation_date InvoicingProcurementPortalPreference#einvoice_delivery_activation_date}

---

##### `EinvoiceDeliveryAttachmentTypes`<sup>Optional</sup> <a name="EinvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes"></a>

```csharp
public string[] EinvoiceDeliveryAttachmentTypes { get; set; }
```

- *Type:* string[]

The types of attachments to include with the e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_attachment_types InvoicingProcurementPortalPreference#einvoice_delivery_attachment_types}

---

##### `EinvoiceDeliveryDocumentTypes`<sup>Optional</sup> <a name="EinvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes"></a>

```csharp
public string[] EinvoiceDeliveryDocumentTypes { get; set; }
```

- *Type:* string[]

The types of e-invoice documents to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_types InvoicingProcurementPortalPreference#einvoice_delivery_document_types}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The communication protocol to use for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#protocol InvoicingProcurementPortalPreference#protocol}

---

##### `PurchaseOrderDataSources`<sup>Optional</sup> <a name="PurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[] PurchaseOrderDataSources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

The sources of purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_sources InvoicingProcurementPortalPreference#purchase_order_data_sources}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources {
    string EinvoiceDeliveryDocumentType = null,
    string PurchaseOrderDataSourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType">EinvoiceDeliveryDocumentType</a></code> | <code>string</code> | The type of e-invoice document that requires purchase order data. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType">PurchaseOrderDataSourceType</a></code> | <code>string</code> | The type of source for purchase order data. |

---

##### `EinvoiceDeliveryDocumentType`<sup>Optional</sup> <a name="EinvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType"></a>

```csharp
public string EinvoiceDeliveryDocumentType { get; set; }
```

- *Type:* string

The type of e-invoice document that requires purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_type InvoicingProcurementPortalPreference#einvoice_delivery_document_type}

---

##### `PurchaseOrderDataSourceType`<sup>Optional</sup> <a name="PurchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType"></a>

```csharp
public string PurchaseOrderDataSourceType { get; set; }
```

- *Type:* string

The type of source for purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_source_type InvoicingProcurementPortalPreference#purchase_order_data_source_type}

---

### InvoicingProcurementPortalPreferenceSelector <a name="InvoicingProcurementPortalPreferenceSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceSelector {
    string[] InvoiceUnitArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns">InvoiceUnitArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies. |

---

##### `InvoiceUnitArns`<sup>Optional</sup> <a name="InvoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns"></a>

```csharp
public string[] InvoiceUnitArns { get; set; }
```

- *Type:* string[]

The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#invoice_unit_arns InvoicingProcurementPortalPreference#invoice_unit_arns}

---

### InvoicingProcurementPortalPreferenceTags <a name="InvoicingProcurementPortalPreferenceTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#key InvoicingProcurementPortalPreference#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#value InvoicingProcurementPortalPreference#value}

---

### InvoicingProcurementPortalPreferenceTestEnvPreference <a name="InvoicingProcurementPortalPreferenceTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceTestEnvPreference {
    string BuyerDomain = null,
    string BuyerIdentifier = null,
    string ProcurementPortalInstanceEndpoint = null,
    string ProcurementPortalSharedSecret = null,
    string SupplierDomain = null,
    string SupplierIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain">BuyerDomain</a></code> | <code>string</code> | The domain identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier">BuyerIdentifier</a></code> | <code>string</code> | The unique identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint">ProcurementPortalInstanceEndpoint</a></code> | <code>string</code> | The endpoint URL for e-invoice delivery in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret">ProcurementPortalSharedSecret</a></code> | <code>string</code> | The shared secret for secure communication in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain">SupplierDomain</a></code> | <code>string</code> | The domain identifier for the supplier in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier">SupplierIdentifier</a></code> | <code>string</code> | The unique identifier for the supplier in the test environment. |

---

##### `BuyerDomain`<sup>Optional</sup> <a name="BuyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain"></a>

```csharp
public string BuyerDomain { get; set; }
```

- *Type:* string

The domain identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `BuyerIdentifier`<sup>Optional</sup> <a name="BuyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier"></a>

```csharp
public string BuyerIdentifier { get; set; }
```

- *Type:* string

The unique identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `ProcurementPortalInstanceEndpoint`<sup>Optional</sup> <a name="ProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint"></a>

```csharp
public string ProcurementPortalInstanceEndpoint { get; set; }
```

- *Type:* string

The endpoint URL for e-invoice delivery in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `ProcurementPortalSharedSecret`<sup>Optional</sup> <a name="ProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret"></a>

```csharp
public string ProcurementPortalSharedSecret { get; set; }
```

- *Type:* string

The shared secret for secure communication in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `SupplierDomain`<sup>Optional</sup> <a name="SupplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain"></a>

```csharp
public string SupplierDomain { get; set; }
```

- *Type:* string

The domain identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `SupplierIdentifier`<sup>Optional</sup> <a name="SupplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier"></a>

```csharp
public string SupplierIdentifier { get; set; }
```

- *Type:* string

The unique identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingProcurementPortalPreferenceContactsList <a name="InvoicingProcurementPortalPreferenceContactsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get"></a>

```csharp
private InvoicingProcurementPortalPreferenceContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceContacts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>[]

---


### InvoicingProcurementPortalPreferenceContactsOutputReference <a name="InvoicingProcurementPortalPreferenceContactsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceContacts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources">PutPurchaseOrderDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod">ResetConnectionTestingMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate">ResetEinvoiceDeliveryActivationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes">ResetEinvoiceDeliveryAttachmentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes">ResetEinvoiceDeliveryDocumentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources">ResetPurchaseOrderDataSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPurchaseOrderDataSources` <a name="PutPurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources"></a>

```csharp
private void PutPurchaseOrderDataSources(IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

---

##### `ResetConnectionTestingMethod` <a name="ResetConnectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod"></a>

```csharp
private void ResetConnectionTestingMethod()
```

##### `ResetEinvoiceDeliveryActivationDate` <a name="ResetEinvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate"></a>

```csharp
private void ResetEinvoiceDeliveryActivationDate()
```

##### `ResetEinvoiceDeliveryAttachmentTypes` <a name="ResetEinvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes"></a>

```csharp
private void ResetEinvoiceDeliveryAttachmentTypes()
```

##### `ResetEinvoiceDeliveryDocumentTypes` <a name="ResetEinvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes"></a>

```csharp
private void ResetEinvoiceDeliveryDocumentTypes()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetPurchaseOrderDataSources` <a name="ResetPurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources"></a>

```csharp
private void ResetPurchaseOrderDataSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources">PurchaseOrderDataSources</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput">ConnectionTestingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput">EinvoiceDeliveryActivationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput">EinvoiceDeliveryAttachmentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput">EinvoiceDeliveryDocumentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput">PurchaseOrderDataSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod">ConnectionTestingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate">EinvoiceDeliveryActivationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes">EinvoiceDeliveryAttachmentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes">EinvoiceDeliveryDocumentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PurchaseOrderDataSources`<sup>Required</sup> <a name="PurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources"></a>

```csharp
public InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList PurchaseOrderDataSources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a>

---

##### `ConnectionTestingMethodInput`<sup>Optional</sup> <a name="ConnectionTestingMethodInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput"></a>

```csharp
public string ConnectionTestingMethodInput { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryActivationDateInput`<sup>Optional</sup> <a name="EinvoiceDeliveryActivationDateInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput"></a>

```csharp
public string EinvoiceDeliveryActivationDateInput { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryAttachmentTypesInput`<sup>Optional</sup> <a name="EinvoiceDeliveryAttachmentTypesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput"></a>

```csharp
public string[] EinvoiceDeliveryAttachmentTypesInput { get; }
```

- *Type:* string[]

---

##### `EinvoiceDeliveryDocumentTypesInput`<sup>Optional</sup> <a name="EinvoiceDeliveryDocumentTypesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput"></a>

```csharp
public string[] EinvoiceDeliveryDocumentTypesInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `PurchaseOrderDataSourcesInput`<sup>Optional</sup> <a name="PurchaseOrderDataSourcesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[] PurchaseOrderDataSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

---

##### `ConnectionTestingMethod`<sup>Required</sup> <a name="ConnectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod"></a>

```csharp
public string ConnectionTestingMethod { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryActivationDate`<sup>Required</sup> <a name="EinvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate"></a>

```csharp
public string EinvoiceDeliveryActivationDate { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryAttachmentTypes`<sup>Required</sup> <a name="EinvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes"></a>

```csharp
public string[] EinvoiceDeliveryAttachmentTypes { get; }
```

- *Type:* string[]

---

##### `EinvoiceDeliveryDocumentTypes`<sup>Required</sup> <a name="EinvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes"></a>

```csharp
public string[] EinvoiceDeliveryDocumentTypes { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get"></a>

```csharp
private InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>[]

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType">ResetEinvoiceDeliveryDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType">ResetPurchaseOrderDataSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEinvoiceDeliveryDocumentType` <a name="ResetEinvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType"></a>

```csharp
private void ResetEinvoiceDeliveryDocumentType()
```

##### `ResetPurchaseOrderDataSourceType` <a name="ResetPurchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType"></a>

```csharp
private void ResetPurchaseOrderDataSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput">EinvoiceDeliveryDocumentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput">PurchaseOrderDataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType">EinvoiceDeliveryDocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType">PurchaseOrderDataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryDocumentTypeInput`<sup>Optional</sup> <a name="EinvoiceDeliveryDocumentTypeInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput"></a>

```csharp
public string EinvoiceDeliveryDocumentTypeInput { get; }
```

- *Type:* string

---

##### `PurchaseOrderDataSourceTypeInput`<sup>Optional</sup> <a name="PurchaseOrderDataSourceTypeInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput"></a>

```csharp
public string PurchaseOrderDataSourceTypeInput { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryDocumentType`<sup>Required</sup> <a name="EinvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType"></a>

```csharp
public string EinvoiceDeliveryDocumentType { get; }
```

- *Type:* string

---

##### `PurchaseOrderDataSourceType`<sup>Required</sup> <a name="PurchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType"></a>

```csharp
public string PurchaseOrderDataSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>

---


### InvoicingProcurementPortalPreferenceSelectorOutputReference <a name="InvoicingProcurementPortalPreferenceSelectorOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns">ResetInvoiceUnitArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInvoiceUnitArns` <a name="ResetInvoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns"></a>

```csharp
private void ResetInvoiceUnitArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput">InvoiceUnitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns">InvoiceUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvoiceUnitArnsInput`<sup>Optional</sup> <a name="InvoiceUnitArnsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput"></a>

```csharp
public string[] InvoiceUnitArnsInput { get; }
```

- *Type:* string[]

---

##### `InvoiceUnitArns`<sup>Required</sup> <a name="InvoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns"></a>

```csharp
public string[] InvoiceUnitArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceSelector InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---


### InvoicingProcurementPortalPreferenceTagsList <a name="InvoicingProcurementPortalPreferenceTagsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get"></a>

```csharp
private InvoicingProcurementPortalPreferenceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>[]

---


### InvoicingProcurementPortalPreferenceTagsOutputReference <a name="InvoicingProcurementPortalPreferenceTagsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>

---


### InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain">ResetBuyerDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier">ResetBuyerIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint">ResetProcurementPortalInstanceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret">ResetProcurementPortalSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain">ResetSupplierDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier">ResetSupplierIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuyerDomain` <a name="ResetBuyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain"></a>

```csharp
private void ResetBuyerDomain()
```

##### `ResetBuyerIdentifier` <a name="ResetBuyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier"></a>

```csharp
private void ResetBuyerIdentifier()
```

##### `ResetProcurementPortalInstanceEndpoint` <a name="ResetProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint"></a>

```csharp
private void ResetProcurementPortalInstanceEndpoint()
```

##### `ResetProcurementPortalSharedSecret` <a name="ResetProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret"></a>

```csharp
private void ResetProcurementPortalSharedSecret()
```

##### `ResetSupplierDomain` <a name="ResetSupplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain"></a>

```csharp
private void ResetSupplierDomain()
```

##### `ResetSupplierIdentifier` <a name="ResetSupplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier"></a>

```csharp
private void ResetSupplierIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput">BuyerDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput">BuyerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput">ProcurementPortalInstanceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput">ProcurementPortalSharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput">SupplierDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput">SupplierIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain">BuyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier">BuyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint">ProcurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret">ProcurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain">SupplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier">SupplierIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuyerDomainInput`<sup>Optional</sup> <a name="BuyerDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput"></a>

```csharp
public string BuyerDomainInput { get; }
```

- *Type:* string

---

##### `BuyerIdentifierInput`<sup>Optional</sup> <a name="BuyerIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput"></a>

```csharp
public string BuyerIdentifierInput { get; }
```

- *Type:* string

---

##### `ProcurementPortalInstanceEndpointInput`<sup>Optional</sup> <a name="ProcurementPortalInstanceEndpointInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput"></a>

```csharp
public string ProcurementPortalInstanceEndpointInput { get; }
```

- *Type:* string

---

##### `ProcurementPortalSharedSecretInput`<sup>Optional</sup> <a name="ProcurementPortalSharedSecretInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput"></a>

```csharp
public string ProcurementPortalSharedSecretInput { get; }
```

- *Type:* string

---

##### `SupplierDomainInput`<sup>Optional</sup> <a name="SupplierDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput"></a>

```csharp
public string SupplierDomainInput { get; }
```

- *Type:* string

---

##### `SupplierIdentifierInput`<sup>Optional</sup> <a name="SupplierIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput"></a>

```csharp
public string SupplierIdentifierInput { get; }
```

- *Type:* string

---

##### `BuyerDomain`<sup>Required</sup> <a name="BuyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain"></a>

```csharp
public string BuyerDomain { get; }
```

- *Type:* string

---

##### `BuyerIdentifier`<sup>Required</sup> <a name="BuyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier"></a>

```csharp
public string BuyerIdentifier { get; }
```

- *Type:* string

---

##### `ProcurementPortalInstanceEndpoint`<sup>Required</sup> <a name="ProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint"></a>

```csharp
public string ProcurementPortalInstanceEndpoint { get; }
```

- *Type:* string

---

##### `ProcurementPortalSharedSecret`<sup>Required</sup> <a name="ProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret"></a>

```csharp
public string ProcurementPortalSharedSecret { get; }
```

- *Type:* string

---

##### `SupplierDomain`<sup>Required</sup> <a name="SupplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain"></a>

```csharp
public string SupplierDomain { get; }
```

- *Type:* string

---

##### `SupplierIdentifier`<sup>Required</sup> <a name="SupplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier"></a>

```csharp
public string SupplierIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingProcurementPortalPreferenceTestEnvPreference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---



