# `elasticloadbalancingv2TrustStore` Submodule <a name="`elasticloadbalancingv2TrustStore` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TrustStore <a name="Elasticloadbalancingv2TrustStore" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStore(Construct Scope, string Id, Elasticloadbalancingv2TrustStoreConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig">Elasticloadbalancingv2TrustStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig">Elasticloadbalancingv2TrustStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket">ResetCaCertificatesBundleS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key">ResetCaCertificatesBundleS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion">ResetCaCertificatesBundleS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags"></a>

```csharp
private void PutTags(IResolvable|Elasticloadbalancingv2TrustStoreTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>[]

---

##### `ResetCaCertificatesBundleS3Bucket` <a name="ResetCaCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket"></a>

```csharp
private void ResetCaCertificatesBundleS3Bucket()
```

##### `ResetCaCertificatesBundleS3Key` <a name="ResetCaCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key"></a>

```csharp
private void ResetCaCertificatesBundleS3Key()
```

##### `ResetCaCertificatesBundleS3ObjectVersion` <a name="ResetCaCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion"></a>

```csharp
private void ResetCaCertificatesBundleS3ObjectVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Elasticloadbalancingv2TrustStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Elasticloadbalancingv2TrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates">NumberOfCaCertificates</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput">CaCertificatesBundleS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput">CaCertificatesBundleS3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput">CaCertificatesBundleS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket">CaCertificatesBundleS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key">CaCertificatesBundleS3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion">CaCertificatesBundleS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NumberOfCaCertificates`<sup>Required</sup> <a name="NumberOfCaCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates"></a>

```csharp
public double NumberOfCaCertificates { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags"></a>

```csharp
public Elasticloadbalancingv2TrustStoreTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a>

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; }
```

- *Type:* string

---

##### `CaCertificatesBundleS3BucketInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3BucketInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput"></a>

```csharp
public string CaCertificatesBundleS3BucketInput { get; }
```

- *Type:* string

---

##### `CaCertificatesBundleS3KeyInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput"></a>

```csharp
public string CaCertificatesBundleS3KeyInput { get; }
```

- *Type:* string

---

##### `CaCertificatesBundleS3ObjectVersionInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3ObjectVersionInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput"></a>

```csharp
public string CaCertificatesBundleS3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>[]

---

##### `CaCertificatesBundleS3Bucket`<sup>Required</sup> <a name="CaCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket"></a>

```csharp
public string CaCertificatesBundleS3Bucket { get; }
```

- *Type:* string

---

##### `CaCertificatesBundleS3Key`<sup>Required</sup> <a name="CaCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key"></a>

```csharp
public string CaCertificatesBundleS3Key { get; }
```

- *Type:* string

---

##### `CaCertificatesBundleS3ObjectVersion`<sup>Required</sup> <a name="CaCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion"></a>

```csharp
public string CaCertificatesBundleS3ObjectVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TrustStoreConfig <a name="Elasticloadbalancingv2TrustStoreConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CaCertificatesBundleS3Bucket = null,
    string CaCertificatesBundleS3Key = null,
    string CaCertificatesBundleS3ObjectVersion = null,
    string Name = null,
    IResolvable|Elasticloadbalancingv2TrustStoreTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket">CaCertificatesBundleS3Bucket</a></code> | <code>string</code> | The name of the S3 bucket to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key">CaCertificatesBundleS3Key</a></code> | <code>string</code> | The name of the S3 object to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion">CaCertificatesBundleS3ObjectVersion</a></code> | <code>string</code> | The version of the S3 bucket that contains the CA certificate bundle. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name">Name</a></code> | <code>string</code> | The name of the trust store. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>[]</code> | The tags to assign to the trust store. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaCertificatesBundleS3Bucket`<sup>Optional</sup> <a name="CaCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket"></a>

```csharp
public string CaCertificatesBundleS3Bucket { get; set; }
```

- *Type:* string

The name of the S3 bucket to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_bucket Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_bucket}

---

##### `CaCertificatesBundleS3Key`<sup>Optional</sup> <a name="CaCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key"></a>

```csharp
public string CaCertificatesBundleS3Key { get; set; }
```

- *Type:* string

The name of the S3 object to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_key Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_key}

---

##### `CaCertificatesBundleS3ObjectVersion`<sup>Optional</sup> <a name="CaCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion"></a>

```csharp
public string CaCertificatesBundleS3ObjectVersion { get; set; }
```

- *Type:* string

The version of the S3 bucket that contains the CA certificate bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_object_version Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_object_version}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#name Elasticloadbalancingv2TrustStore#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>[]

The tags to assign to the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#tags Elasticloadbalancingv2TrustStore#tags}

---

### Elasticloadbalancingv2TrustStoreTags <a name="Elasticloadbalancingv2TrustStoreTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TrustStoreTagsList <a name="Elasticloadbalancingv2TrustStoreTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get"></a>

```csharp
private Elasticloadbalancingv2TrustStoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>[]

---


### Elasticloadbalancingv2TrustStoreTagsOutputReference <a name="Elasticloadbalancingv2TrustStoreTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>

---



