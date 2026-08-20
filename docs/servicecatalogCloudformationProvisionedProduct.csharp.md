# `servicecatalogCloudformationProvisionedProduct` Submodule <a name="`servicecatalogCloudformationProvisionedProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProvisionedProduct <a name="ServicecatalogCloudformationProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProduct(Construct Scope, string Id, ServicecatalogCloudformationProvisionedProductConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig">ServicecatalogCloudformationProvisionedProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig">ServicecatalogCloudformationProvisionedProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters">PutProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences">PutProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns">ResetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId">ResetPathId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName">ResetPathName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName">ResetProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName">ResetProvisionedProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId">ResetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName">ResetProvisioningArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters">ResetProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences">ResetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProvisioningParameters` <a name="PutProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters"></a>

```csharp
private void PutProvisioningParameters(IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

---

##### `PutProvisioningPreferences` <a name="PutProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences"></a>

```csharp
private void PutProvisioningPreferences(ServicecatalogCloudformationProvisionedProductProvisioningPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags"></a>

```csharp
private void PutTags(IResolvable|ServicecatalogCloudformationProvisionedProductTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetNotificationArns` <a name="ResetNotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns"></a>

```csharp
private void ResetNotificationArns()
```

##### `ResetPathId` <a name="ResetPathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId"></a>

```csharp
private void ResetPathId()
```

##### `ResetPathName` <a name="ResetPathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName"></a>

```csharp
private void ResetPathName()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId"></a>

```csharp
private void ResetProductId()
```

##### `ResetProductName` <a name="ResetProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName"></a>

```csharp
private void ResetProductName()
```

##### `ResetProvisionedProductName` <a name="ResetProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName"></a>

```csharp
private void ResetProvisionedProductName()
```

##### `ResetProvisioningArtifactId` <a name="ResetProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId"></a>

```csharp
private void ResetProvisioningArtifactId()
```

##### `ResetProvisioningArtifactName` <a name="ResetProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName"></a>

```csharp
private void ResetProvisioningArtifactName()
```

##### `ResetProvisioningParameters` <a name="ResetProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters"></a>

```csharp
private void ResetProvisioningParameters()
```

##### `ResetProvisioningPreferences` <a name="ResetProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences"></a>

```csharp
private void ResetProvisioningPreferences()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogCloudformationProvisionedProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogCloudformationProvisionedProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogCloudformationProvisionedProduct.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogCloudformationProvisionedProduct.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogCloudformationProvisionedProduct to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogCloudformationProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn">CloudformationStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs">Outputs</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId">ProvisionedProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters">ProvisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences">ProvisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId">RecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput">NotificationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput">PathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput">PathNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput">ProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput">ProvisionedProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput">ProvisioningArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput">ProvisioningArtifactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput">ProvisioningParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput">ProvisioningPreferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId">PathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName">PathName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName">ProvisionedProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudformationStackArn`<sup>Required</sup> <a name="CloudformationStackArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn"></a>

```csharp
public string CloudformationStackArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs"></a>

```csharp
public StringMap Outputs { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ProvisionedProductId`<sup>Required</sup> <a name="ProvisionedProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId"></a>

```csharp
public string ProvisionedProductId { get; }
```

- *Type:* string

---

##### `ProvisioningParameters`<sup>Required</sup> <a name="ProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters"></a>

```csharp
public ServicecatalogCloudformationProvisionedProductProvisioningParametersList ProvisioningParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a>

---

##### `ProvisioningPreferences`<sup>Required</sup> <a name="ProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences"></a>

```csharp
public ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference ProvisioningPreferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a>

---

##### `RecordId`<sup>Required</sup> <a name="RecordId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId"></a>

```csharp
public string RecordId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags"></a>

```csharp
public ServicecatalogCloudformationProvisionedProductTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `NotificationArnsInput`<sup>Optional</sup> <a name="NotificationArnsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput"></a>

```csharp
public string[] NotificationArnsInput { get; }
```

- *Type:* string[]

---

##### `PathIdInput`<sup>Optional</sup> <a name="PathIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput"></a>

```csharp
public string PathIdInput { get; }
```

- *Type:* string

---

##### `PathNameInput`<sup>Optional</sup> <a name="PathNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput"></a>

```csharp
public string PathNameInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `ProductNameInput`<sup>Optional</sup> <a name="ProductNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput"></a>

```csharp
public string ProductNameInput { get; }
```

- *Type:* string

---

##### `ProvisionedProductNameInput`<sup>Optional</sup> <a name="ProvisionedProductNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput"></a>

```csharp
public string ProvisionedProductNameInput { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactIdInput`<sup>Optional</sup> <a name="ProvisioningArtifactIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput"></a>

```csharp
public string ProvisioningArtifactIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactNameInput`<sup>Optional</sup> <a name="ProvisioningArtifactNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput"></a>

```csharp
public string ProvisioningArtifactNameInput { get; }
```

- *Type:* string

---

##### `ProvisioningParametersInput`<sup>Optional</sup> <a name="ProvisioningParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningParameters[] ProvisioningParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

---

##### `ProvisioningPreferencesInput`<sup>Optional</sup> <a name="ProvisioningPreferencesInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningPreferences ProvisioningPreferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; }
```

- *Type:* string[]

---

##### `PathId`<sup>Required</sup> <a name="PathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId"></a>

```csharp
public string PathId { get; }
```

- *Type:* string

---

##### `PathName`<sup>Required</sup> <a name="PathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName"></a>

```csharp
public string PathName { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `ProvisionedProductName`<sup>Required</sup> <a name="ProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName"></a>

```csharp
public string ProvisionedProductName { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactId`<sup>Required</sup> <a name="ProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId"></a>

```csharp
public string ProvisioningArtifactId { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactName`<sup>Required</sup> <a name="ProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName"></a>

```csharp
public string ProvisioningArtifactName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProvisionedProductConfig <a name="ServicecatalogCloudformationProvisionedProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AcceptLanguage = null,
    string[] NotificationArns = null,
    string PathId = null,
    string PathName = null,
    string ProductId = null,
    string ProductName = null,
    string ProvisionedProductName = null,
    string ProvisioningArtifactId = null,
    string ProvisioningArtifactName = null,
    IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningParameters[] ProvisioningParameters = null,
    ServicecatalogCloudformationProvisionedProductProvisioningPreferences ProvisioningPreferences = null,
    IResolvable|ServicecatalogCloudformationProvisionedProductTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId">PathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName">PathName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName">ProductName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName">ProvisionedProductName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters">ProvisioningParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences">ProvisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}.

---

##### `NotificationArns`<sup>Optional</sup> <a name="NotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}.

---

##### `PathId`<sup>Optional</sup> <a name="PathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId"></a>

```csharp
public string PathId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}.

---

##### `PathName`<sup>Optional</sup> <a name="PathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName"></a>

```csharp
public string PathName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}.

---

##### `ProductName`<sup>Optional</sup> <a name="ProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName"></a>

```csharp
public string ProductName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}.

---

##### `ProvisionedProductName`<sup>Optional</sup> <a name="ProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName"></a>

```csharp
public string ProvisionedProductName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}.

---

##### `ProvisioningArtifactId`<sup>Optional</sup> <a name="ProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId"></a>

```csharp
public string ProvisioningArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}.

---

##### `ProvisioningArtifactName`<sup>Optional</sup> <a name="ProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName"></a>

```csharp
public string ProvisioningArtifactName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}.

---

##### `ProvisioningParameters`<sup>Optional</sup> <a name="ProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningParameters[] ProvisioningParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}.

---

##### `ProvisioningPreferences`<sup>Optional</sup> <a name="ProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences"></a>

```csharp
public ServicecatalogCloudformationProvisionedProductProvisioningPreferences ProvisioningPreferences { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningParameters <a name="ServicecatalogCloudformationProvisionedProductProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductProvisioningParameters {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningPreferences <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductProvisioningPreferences {
    string[] StackSetAccounts = null,
    double StackSetFailureToleranceCount = null,
    double StackSetFailureTolerancePercentage = null,
    double StackSetMaxConcurrencyCount = null,
    double StackSetMaxConcurrencyPercentage = null,
    string StackSetOperationType = null,
    string[] StackSetRegions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts">StackSetAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount">StackSetFailureToleranceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage">StackSetFailureTolerancePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount">StackSetMaxConcurrencyCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage">StackSetMaxConcurrencyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType">StackSetOperationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions">StackSetRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}. |

---

##### `StackSetAccounts`<sup>Optional</sup> <a name="StackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts"></a>

```csharp
public string[] StackSetAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}.

---

##### `StackSetFailureToleranceCount`<sup>Optional</sup> <a name="StackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount"></a>

```csharp
public double StackSetFailureToleranceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}.

---

##### `StackSetFailureTolerancePercentage`<sup>Optional</sup> <a name="StackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage"></a>

```csharp
public double StackSetFailureTolerancePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}.

---

##### `StackSetMaxConcurrencyCount`<sup>Optional</sup> <a name="StackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount"></a>

```csharp
public double StackSetMaxConcurrencyCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}.

---

##### `StackSetMaxConcurrencyPercentage`<sup>Optional</sup> <a name="StackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage"></a>

```csharp
public double StackSetMaxConcurrencyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}.

---

##### `StackSetOperationType`<sup>Optional</sup> <a name="StackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType"></a>

```csharp
public string StackSetOperationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}.

---

##### `StackSetRegions`<sup>Optional</sup> <a name="StackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions"></a>

```csharp
public string[] StackSetRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}.

---

### ServicecatalogCloudformationProvisionedProductTags <a name="ServicecatalogCloudformationProvisionedProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProvisionedProductProvisioningParametersList <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductProvisioningParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get"></a>

```csharp
private ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

---


### ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>

---


### ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts">ResetStackSetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount">ResetStackSetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage">ResetStackSetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount">ResetStackSetMaxConcurrencyCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage">ResetStackSetMaxConcurrencyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType">ResetStackSetOperationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions">ResetStackSetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStackSetAccounts` <a name="ResetStackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts"></a>

```csharp
private void ResetStackSetAccounts()
```

##### `ResetStackSetFailureToleranceCount` <a name="ResetStackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount"></a>

```csharp
private void ResetStackSetFailureToleranceCount()
```

##### `ResetStackSetFailureTolerancePercentage` <a name="ResetStackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage"></a>

```csharp
private void ResetStackSetFailureTolerancePercentage()
```

##### `ResetStackSetMaxConcurrencyCount` <a name="ResetStackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount"></a>

```csharp
private void ResetStackSetMaxConcurrencyCount()
```

##### `ResetStackSetMaxConcurrencyPercentage` <a name="ResetStackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage"></a>

```csharp
private void ResetStackSetMaxConcurrencyPercentage()
```

##### `ResetStackSetOperationType` <a name="ResetStackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType"></a>

```csharp
private void ResetStackSetOperationType()
```

##### `ResetStackSetRegions` <a name="ResetStackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions"></a>

```csharp
private void ResetStackSetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput">StackSetAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput">StackSetFailureToleranceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput">StackSetFailureTolerancePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput">StackSetMaxConcurrencyCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput">StackSetMaxConcurrencyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput">StackSetOperationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput">StackSetRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts">StackSetAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount">StackSetFailureToleranceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage">StackSetFailureTolerancePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount">StackSetMaxConcurrencyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage">StackSetMaxConcurrencyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType">StackSetOperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions">StackSetRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackSetAccountsInput`<sup>Optional</sup> <a name="StackSetAccountsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput"></a>

```csharp
public string[] StackSetAccountsInput { get; }
```

- *Type:* string[]

---

##### `StackSetFailureToleranceCountInput`<sup>Optional</sup> <a name="StackSetFailureToleranceCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput"></a>

```csharp
public double StackSetFailureToleranceCountInput { get; }
```

- *Type:* double

---

##### `StackSetFailureTolerancePercentageInput`<sup>Optional</sup> <a name="StackSetFailureTolerancePercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput"></a>

```csharp
public double StackSetFailureTolerancePercentageInput { get; }
```

- *Type:* double

---

##### `StackSetMaxConcurrencyCountInput`<sup>Optional</sup> <a name="StackSetMaxConcurrencyCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput"></a>

```csharp
public double StackSetMaxConcurrencyCountInput { get; }
```

- *Type:* double

---

##### `StackSetMaxConcurrencyPercentageInput`<sup>Optional</sup> <a name="StackSetMaxConcurrencyPercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput"></a>

```csharp
public double StackSetMaxConcurrencyPercentageInput { get; }
```

- *Type:* double

---

##### `StackSetOperationTypeInput`<sup>Optional</sup> <a name="StackSetOperationTypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput"></a>

```csharp
public string StackSetOperationTypeInput { get; }
```

- *Type:* string

---

##### `StackSetRegionsInput`<sup>Optional</sup> <a name="StackSetRegionsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput"></a>

```csharp
public string[] StackSetRegionsInput { get; }
```

- *Type:* string[]

---

##### `StackSetAccounts`<sup>Required</sup> <a name="StackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts"></a>

```csharp
public string[] StackSetAccounts { get; }
```

- *Type:* string[]

---

##### `StackSetFailureToleranceCount`<sup>Required</sup> <a name="StackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount"></a>

```csharp
public double StackSetFailureToleranceCount { get; }
```

- *Type:* double

---

##### `StackSetFailureTolerancePercentage`<sup>Required</sup> <a name="StackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage"></a>

```csharp
public double StackSetFailureTolerancePercentage { get; }
```

- *Type:* double

---

##### `StackSetMaxConcurrencyCount`<sup>Required</sup> <a name="StackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount"></a>

```csharp
public double StackSetMaxConcurrencyCount { get; }
```

- *Type:* double

---

##### `StackSetMaxConcurrencyPercentage`<sup>Required</sup> <a name="StackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage"></a>

```csharp
public double StackSetMaxConcurrencyPercentage { get; }
```

- *Type:* double

---

##### `StackSetOperationType`<sup>Required</sup> <a name="StackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType"></a>

```csharp
public string StackSetOperationType { get; }
```

- *Type:* string

---

##### `StackSetRegions`<sup>Required</sup> <a name="StackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions"></a>

```csharp
public string[] StackSetRegions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductProvisioningPreferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---


### ServicecatalogCloudformationProvisionedProductTagsList <a name="ServicecatalogCloudformationProvisionedProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get"></a>

```csharp
private ServicecatalogCloudformationProvisionedProductTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

---


### ServicecatalogCloudformationProvisionedProductTagsOutputReference <a name="ServicecatalogCloudformationProvisionedProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogCloudformationProvisionedProductTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogCloudformationProvisionedProductTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>

---



