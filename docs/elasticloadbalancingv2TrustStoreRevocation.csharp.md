# `elasticloadbalancingv2TrustStoreRevocation` Submodule <a name="`elasticloadbalancingv2TrustStoreRevocation` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TrustStoreRevocation <a name="Elasticloadbalancingv2TrustStoreRevocation" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation awscc_elasticloadbalancingv2_trust_store_revocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocation(Construct Scope, string Id, Elasticloadbalancingv2TrustStoreRevocationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig">Elasticloadbalancingv2TrustStoreRevocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig">Elasticloadbalancingv2TrustStoreRevocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.putRevocationContents">PutRevocationContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.resetRevocationContents">ResetRevocationContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.resetTrustStoreArn">ResetTrustStoreArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRevocationContents` <a name="PutRevocationContents" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.putRevocationContents"></a>

```csharp
private void PutRevocationContents(IResolvable|Elasticloadbalancingv2TrustStoreRevocationRevocationContents[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.putRevocationContents.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>[]

---

##### `ResetRevocationContents` <a name="ResetRevocationContents" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.resetRevocationContents"></a>

```csharp
private void ResetRevocationContents()
```

##### `ResetTrustStoreArn` <a name="ResetTrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.resetTrustStoreArn"></a>

```csharp
private void ResetTrustStoreArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TrustStoreRevocation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStoreRevocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStoreRevocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStoreRevocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2TrustStoreRevocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Elasticloadbalancingv2TrustStoreRevocation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Elasticloadbalancingv2TrustStoreRevocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Elasticloadbalancingv2TrustStoreRevocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TrustStoreRevocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.revocationContents">RevocationContents</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList">Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.revocationId">RevocationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.trustStoreRevocations">TrustStoreRevocations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList">Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.revocationContentsInput">RevocationContentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.trustStoreArnInput">TrustStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RevocationContents`<sup>Required</sup> <a name="RevocationContents" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.revocationContents"></a>

```csharp
public Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList RevocationContents { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList">Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList</a>

---

##### `RevocationId`<sup>Required</sup> <a name="RevocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.revocationId"></a>

```csharp
public double RevocationId { get; }
```

- *Type:* double

---

##### `TrustStoreRevocations`<sup>Required</sup> <a name="TrustStoreRevocations" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.trustStoreRevocations"></a>

```csharp
public Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList TrustStoreRevocations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList">Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList</a>

---

##### `RevocationContentsInput`<sup>Optional</sup> <a name="RevocationContentsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.revocationContentsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreRevocationRevocationContents[] RevocationContentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>[]

---

##### `TrustStoreArnInput`<sup>Optional</sup> <a name="TrustStoreArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.trustStoreArnInput"></a>

```csharp
public string TrustStoreArnInput { get; }
```

- *Type:* string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TrustStoreRevocationConfig <a name="Elasticloadbalancingv2TrustStoreRevocationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|Elasticloadbalancingv2TrustStoreRevocationRevocationContents[] RevocationContents = null,
    string TrustStoreArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.revocationContents">RevocationContents</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>[]</code> | The attributes required to create a trust store revocation. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the trust store. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RevocationContents`<sup>Optional</sup> <a name="RevocationContents" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.revocationContents"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreRevocationRevocationContents[] RevocationContents { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>[]

The attributes required to create a trust store revocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#revocation_contents Elasticloadbalancingv2TrustStoreRevocation#revocation_contents}

---

##### `TrustStoreArn`<sup>Optional</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationConfig.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#trust_store_arn Elasticloadbalancingv2TrustStoreRevocation#trust_store_arn}

---

### Elasticloadbalancingv2TrustStoreRevocationRevocationContents <a name="Elasticloadbalancingv2TrustStoreRevocationRevocationContents" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocationRevocationContents {
    string RevocationType = null,
    string S3Bucket = null,
    string S3Key = null,
    string S3ObjectVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.revocationType">RevocationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#revocation_type Elasticloadbalancingv2TrustStoreRevocation#revocation_type}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_bucket Elasticloadbalancingv2TrustStoreRevocation#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_key Elasticloadbalancingv2TrustStoreRevocation#s3_key}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_object_version Elasticloadbalancingv2TrustStoreRevocation#s3_object_version}. |

---

##### `RevocationType`<sup>Optional</sup> <a name="RevocationType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.revocationType"></a>

```csharp
public string RevocationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#revocation_type Elasticloadbalancingv2TrustStoreRevocation#revocation_type}.

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_bucket Elasticloadbalancingv2TrustStoreRevocation#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_key Elasticloadbalancingv2TrustStoreRevocation#s3_key}.

---

##### `S3ObjectVersion`<sup>Optional</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_object_version Elasticloadbalancingv2TrustStoreRevocation#s3_object_version}.

---

### Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations <a name="Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList <a name="Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.get"></a>

```csharp
private Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreRevocationRevocationContents[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>[]

---


### Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference <a name="Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetRevocationType">ResetRevocationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetS3ObjectVersion">ResetS3ObjectVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRevocationType` <a name="ResetRevocationType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetRevocationType"></a>

```csharp
private void ResetRevocationType()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```

##### `ResetS3ObjectVersion` <a name="ResetS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resetS3ObjectVersion"></a>

```csharp
private void ResetS3ObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.revocationTypeInput">RevocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3ObjectVersionInput">S3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.revocationType">RevocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevocationTypeInput`<sup>Optional</sup> <a name="RevocationTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.revocationTypeInput"></a>

```csharp
public string RevocationTypeInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3ObjectVersionInput`<sup>Optional</sup> <a name="S3ObjectVersionInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3ObjectVersionInput"></a>

```csharp
public string S3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `RevocationType`<sup>Required</sup> <a name="RevocationType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.revocationType"></a>

```csharp
public string RevocationType { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2TrustStoreRevocationRevocationContents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationRevocationContents">Elasticloadbalancingv2TrustStoreRevocationRevocationContents</a>

---


### Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList <a name="Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.get"></a>

```csharp
private Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference <a name="Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.numberOfRevokedEntries">NumberOfRevokedEntries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationId">RevocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationType">RevocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations">Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfRevokedEntries`<sup>Required</sup> <a name="NumberOfRevokedEntries" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.numberOfRevokedEntries"></a>

```csharp
public double NumberOfRevokedEntries { get; }
```

- *Type:* double

---

##### `RevocationId`<sup>Required</sup> <a name="RevocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationId"></a>

```csharp
public string RevocationId { get; }
```

- *Type:* string

---

##### `RevocationType`<sup>Required</sup> <a name="RevocationType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationType"></a>

```csharp
public string RevocationType { get; }
```

- *Type:* string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.internalValue"></a>

```csharp
public Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStoreRevocation.Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations">Elasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations</a>

---



