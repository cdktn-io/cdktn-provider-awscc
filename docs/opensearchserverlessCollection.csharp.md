# `opensearchserverlessCollection` Submodule <a name="`opensearchserverlessCollection` Submodule" id="@cdktn/provider-awscc.opensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollection <a name="OpensearchserverlessCollection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection awscc_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollection(Construct Scope, string Id, OpensearchserverlessCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig">OpensearchserverlessCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig">OpensearchserverlessCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions">PutVectorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName">ResetCollectionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas">ResetStandbyReplicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions">ResetVectorOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(OpensearchserverlessCollectionEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags"></a>

```csharp
private void PutTags(IResolvable|OpensearchserverlessCollectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>[]

---

##### `PutVectorOptions` <a name="PutVectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions"></a>

```csharp
private void PutVectorOptions(OpensearchserverlessCollectionVectorOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---

##### `ResetCollectionGroupName` <a name="ResetCollectionGroupName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName"></a>

```csharp
private void ResetCollectionGroupName()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetStandbyReplicas` <a name="ResetStandbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas"></a>

```csharp
private void ResetStandbyReplicas()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVectorOptions` <a name="ResetVectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions"></a>

```csharp
private void ResetVectorOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserverlessCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserverlessCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserverlessCollection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchserverlessCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint">CollectionEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference">OpensearchserverlessCollectionEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fipsEndpoints">FipsEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference">OpensearchserverlessCollectionFipsEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList">OpensearchserverlessCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions">VectorOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference">OpensearchserverlessCollectionVectorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput">CollectionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput">StandbyReplicasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput">VectorOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName">CollectionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas">StandbyReplicas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollectionEndpoint`<sup>Required</sup> <a name="CollectionEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint"></a>

```csharp
public string CollectionEndpoint { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint"></a>

```csharp
public string DashboardEndpoint { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig"></a>

```csharp
public OpensearchserverlessCollectionEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference">OpensearchserverlessCollectionEncryptionConfigOutputReference</a>

---

##### `FipsEndpoints`<sup>Required</sup> <a name="FipsEndpoints" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fipsEndpoints"></a>

```csharp
public OpensearchserverlessCollectionFipsEndpointsOutputReference FipsEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference">OpensearchserverlessCollectionFipsEndpointsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags"></a>

```csharp
public OpensearchserverlessCollectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList">OpensearchserverlessCollectionTagsList</a>

---

##### `VectorOptions`<sup>Required</sup> <a name="VectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions"></a>

```csharp
public OpensearchserverlessCollectionVectorOptionsOutputReference VectorOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference">OpensearchserverlessCollectionVectorOptionsOutputReference</a>

---

##### `CollectionGroupNameInput`<sup>Optional</sup> <a name="CollectionGroupNameInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput"></a>

```csharp
public string CollectionGroupNameInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtectionInput"></a>

```csharp
public string DeletionProtectionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StandbyReplicasInput`<sup>Optional</sup> <a name="StandbyReplicasInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput"></a>

```csharp
public string StandbyReplicasInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VectorOptionsInput`<sup>Optional</sup> <a name="VectorOptionsInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionVectorOptions VectorOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---

##### `CollectionGroupName`<sup>Required</sup> <a name="CollectionGroupName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName"></a>

```csharp
public string CollectionGroupName { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas"></a>

```csharp
public string StandbyReplicas { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionConfig <a name="OpensearchserverlessCollectionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string CollectionGroupName = null,
    string DeletionProtection = null,
    string Description = null,
    OpensearchserverlessCollectionEncryptionConfig EncryptionConfig = null,
    string StandbyReplicas = null,
    IResolvable|OpensearchserverlessCollectionTags[] Tags = null,
    string Type = null,
    OpensearchserverlessCollectionVectorOptions VectorOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name">Name</a></code> | <code>string</code> | The name of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName">CollectionGroupName</a></code> | <code>string</code> | The name of the collection group to associate with the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | The deletion protection state of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description">Description</a></code> | <code>string</code> | The description of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | Encryption settings for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas">StandbyReplicas</a></code> | <code>string</code> | The possible standby replicas for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>[]</code> | List of tags to be added to the resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type">Type</a></code> | <code>string</code> | The possible types for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions">VectorOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | Vector search configuration options for the collection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the collection.

The name must meet the following criteria:
Unique to your account and AWS Region
Starts with a lowercase letter
Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
Contains between 3 and 64 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `CollectionGroupName`<sup>Optional</sup> <a name="CollectionGroupName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName"></a>

```csharp
public string CollectionGroupName { get; set; }
```

- *Type:* string

The name of the collection group to associate with the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; set; }
```

- *Type:* string

The deletion protection state of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#deletion_protection OpensearchserverlessCollection#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig"></a>

```csharp
public OpensearchserverlessCollectionEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

Encryption settings for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}

---

##### `StandbyReplicas`<sup>Optional</sup> <a name="StandbyReplicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas"></a>

```csharp
public string StandbyReplicas { get; set; }
```

- *Type:* string

The possible standby replicas for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>[]

List of tags to be added to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The possible types for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `VectorOptions`<sup>Optional</sup> <a name="VectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions"></a>

```csharp
public OpensearchserverlessCollectionVectorOptions VectorOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

Vector search configuration options for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}

---

### OpensearchserverlessCollectionEncryptionConfig <a name="OpensearchserverlessCollectionEncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionEncryptionConfig {
    bool|IResolvable AwsOwnedKey = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey">AwsOwnedKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to use an AWS owned key for encryption. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Key Management Service key used to encrypt the collection. |

---

##### `AwsOwnedKey`<sup>Optional</sup> <a name="AwsOwnedKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey"></a>

```csharp
public bool|IResolvable AwsOwnedKey { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to use an AWS owned key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Key Management Service key used to encrypt the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}

---

### OpensearchserverlessCollectionFipsEndpoints <a name="OpensearchserverlessCollectionFipsEndpoints" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionFipsEndpoints {

};
```


### OpensearchserverlessCollectionTags <a name="OpensearchserverlessCollectionTags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.key">Key</a></code> | <code>string</code> | The key in the key-value pair. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.value">Value</a></code> | <code>string</code> | The value in the key-value pair. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#key OpensearchserverlessCollection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#value OpensearchserverlessCollection#value}

---

### OpensearchserverlessCollectionVectorOptions <a name="OpensearchserverlessCollectionVectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionVectorOptions {
    string ServerlessVectorAcceleration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code>string</code> | Indicates whether GPU acceleration is enabled for vector indexing. |

---

##### `ServerlessVectorAcceleration`<sup>Optional</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration"></a>

```csharp
public string ServerlessVectorAcceleration { get; set; }
```

- *Type:* string

Indicates whether GPU acceleration is enabled for vector indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionEncryptionConfigOutputReference <a name="OpensearchserverlessCollectionEncryptionConfigOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey">ResetAwsOwnedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsOwnedKey` <a name="ResetAwsOwnedKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey"></a>

```csharp
private void ResetAwsOwnedKey()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput">AwsOwnedKeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey">AwsOwnedKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsOwnedKeyInput`<sup>Optional</sup> <a name="AwsOwnedKeyInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput"></a>

```csharp
public bool|IResolvable AwsOwnedKeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `AwsOwnedKey`<sup>Required</sup> <a name="AwsOwnedKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey"></a>

```csharp
public bool|IResolvable AwsOwnedKey { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionEncryptionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---


### OpensearchserverlessCollectionFipsEndpointsOutputReference <a name="OpensearchserverlessCollectionFipsEndpointsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionFipsEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint">CollectionEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints">OpensearchserverlessCollectionFipsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionEndpoint`<sup>Required</sup> <a name="CollectionEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint"></a>

```csharp
public string CollectionEndpoint { get; }
```

- *Type:* string

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint"></a>

```csharp
public string DashboardEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue"></a>

```csharp
public OpensearchserverlessCollectionFipsEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints">OpensearchserverlessCollectionFipsEndpoints</a>

---


### OpensearchserverlessCollectionTagsList <a name="OpensearchserverlessCollectionTagsList" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get"></a>

```csharp
private OpensearchserverlessCollectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>[]

---


### OpensearchserverlessCollectionTagsOutputReference <a name="OpensearchserverlessCollectionTagsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>

---


### OpensearchserverlessCollectionVectorOptionsOutputReference <a name="OpensearchserverlessCollectionVectorOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchserverlessCollectionVectorOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration">ResetServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerlessVectorAcceleration` <a name="ResetServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```csharp
private void ResetServerlessVectorAcceleration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput">ServerlessVectorAccelerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerlessVectorAccelerationInput`<sup>Optional</sup> <a name="ServerlessVectorAccelerationInput" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```csharp
public string ServerlessVectorAccelerationInput { get; }
```

- *Type:* string

---

##### `ServerlessVectorAcceleration`<sup>Required</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```csharp
public string ServerlessVectorAcceleration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionVectorOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---



