# `securitylakeDataLake` Submodule <a name="`securitylakeDataLake` Submodule" id="@cdktn/provider-awscc.securitylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeDataLake <a name="SecuritylakeDataLake" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake awscc_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLake(Construct Scope, string Id, SecuritylakeDataLakeConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetMetaStoreManagerRoleArn">ResetMetaStoreManagerRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetReplicationConfiguration">ResetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(SecuritylakeDataLakeEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration"></a>

```csharp
private void PutLifecycleConfiguration(SecuritylakeDataLakeLifecycleConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration"></a>

```csharp
private void PutReplicationConfiguration(SecuritylakeDataLakeReplicationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags"></a>

```csharp
private void PutTags(IResolvable|SecuritylakeDataLakeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetLifecycleConfiguration"></a>

```csharp
private void ResetLifecycleConfiguration()
```

##### `ResetMetaStoreManagerRoleArn` <a name="ResetMetaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetMetaStoreManagerRoleArn"></a>

```csharp
private void ResetMetaStoreManagerRoleArn()
```

##### `ResetReplicationConfiguration` <a name="ResetReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetReplicationConfiguration"></a>

```csharp
private void ResetReplicationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeDataLake resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeDataLake.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeDataLake.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeDataLake.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecuritylakeDataLake.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecuritylakeDataLake resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeDataLake to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference">SecuritylakeDataLakeEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference">SecuritylakeDataLakeLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference">SecuritylakeDataLakeReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList">SecuritylakeDataLakeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput">MetaStoreManagerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn">MetaStoreManagerRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfiguration"></a>

```csharp
public SecuritylakeDataLakeEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference">SecuritylakeDataLakeEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfiguration"></a>

```csharp
public SecuritylakeDataLakeLifecycleConfigurationOutputReference LifecycleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference">SecuritylakeDataLakeLifecycleConfigurationOutputReference</a>

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfiguration"></a>

```csharp
public SecuritylakeDataLakeReplicationConfigurationOutputReference ReplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference">SecuritylakeDataLakeReplicationConfigurationOutputReference</a>

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tags"></a>

```csharp
public SecuritylakeDataLakeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList">SecuritylakeDataLakeTagsList</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|SecuritylakeDataLakeEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfigurationInput"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfiguration LifecycleConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

---

##### `MetaStoreManagerRoleArnInput`<sup>Optional</sup> <a name="MetaStoreManagerRoleArnInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput"></a>

```csharp
public string MetaStoreManagerRoleArnInput { get; }
```

- *Type:* string

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfigurationInput"></a>

```csharp
public IResolvable|SecuritylakeDataLakeReplicationConfiguration ReplicationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput"></a>

```csharp
public IResolvable|SecuritylakeDataLakeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

---

##### `MetaStoreManagerRoleArn`<sup>Required</sup> <a name="MetaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```csharp
public string MetaStoreManagerRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeDataLakeConfig <a name="SecuritylakeDataLakeConfig" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SecuritylakeDataLakeEncryptionConfiguration EncryptionConfiguration = null,
    SecuritylakeDataLakeLifecycleConfiguration LifecycleConfiguration = null,
    string MetaStoreManagerRoleArn = null,
    SecuritylakeDataLakeReplicationConfiguration ReplicationConfiguration = null,
    IResolvable|SecuritylakeDataLakeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a></code> | Provides encryption details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a></code> | Provides lifecycle details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn">MetaStoreManagerRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) used to index AWS Glue table partitions that are generated by the ingestion and normalization of AWS log sources and custom sources. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a></code> | Provides replication details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.encryptionConfiguration"></a>

```csharp
public SecuritylakeDataLakeEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

Provides encryption details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycleConfiguration"></a>

```csharp
public SecuritylakeDataLakeLifecycleConfiguration LifecycleConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

Provides lifecycle details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#lifecycle_configuration SecuritylakeDataLake#lifecycle_configuration}

---

##### `MetaStoreManagerRoleArn`<sup>Optional</sup> <a name="MetaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn"></a>

```csharp
public string MetaStoreManagerRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) used to index AWS Glue table partitions that are generated by the ingestion and normalization of AWS log sources and custom sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}

---

##### `ReplicationConfiguration`<sup>Optional</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.replicationConfiguration"></a>

```csharp
public SecuritylakeDataLakeReplicationConfiguration ReplicationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

Provides replication details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#replication_configuration SecuritylakeDataLake#replication_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags"></a>

```csharp
public IResolvable|SecuritylakeDataLakeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}.

---

### SecuritylakeDataLakeEncryptionConfiguration <a name="SecuritylakeDataLakeEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeEncryptionConfiguration {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}

---

### SecuritylakeDataLakeLifecycleConfiguration <a name="SecuritylakeDataLakeLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeLifecycleConfiguration {
    SecuritylakeDataLakeLifecycleConfigurationExpiration Expiration = null,
    IResolvable|SecuritylakeDataLakeLifecycleConfigurationTransitions[] Transitions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | Provides data expiration details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.transitions">Transitions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]</code> | Provides data storage transition details of Amazon Security Lake object. |

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.expiration"></a>

```csharp
public SecuritylakeDataLakeLifecycleConfigurationExpiration Expiration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

Provides data expiration details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#expiration SecuritylakeDataLake#expiration}

---

##### `Transitions`<sup>Optional</sup> <a name="Transitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.transitions"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfigurationTransitions[] Transitions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

Provides data storage transition details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#transitions SecuritylakeDataLake#transitions}

---

### SecuritylakeDataLakeLifecycleConfigurationExpiration <a name="SecuritylakeDataLakeLifecycleConfigurationExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeLifecycleConfigurationExpiration {
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.property.days">Days</a></code> | <code>double</code> | Number of days before data expires in the Amazon Security Lake object. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Number of days before data expires in the Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}

---

### SecuritylakeDataLakeLifecycleConfigurationTransitions <a name="SecuritylakeDataLakeLifecycleConfigurationTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeLifecycleConfigurationTransitions {
    double Days = null,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.days">Days</a></code> | <code>double</code> | Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.storageClass">StorageClass</a></code> | <code>string</code> | The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}

---

### SecuritylakeDataLakeReplicationConfiguration <a name="SecuritylakeDataLakeReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeReplicationConfiguration {
    string[] Regions = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.regions">Regions</a></code> | <code>string[]</code> | Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Replication settings for the Amazon S3 buckets. |

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets.

Amazon S3 buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different AWS Regions or within the same Region as the source bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Replication settings for the Amazon S3 buckets.

This parameter uses the AWS Identity and Access Management (IAM) role you created that is managed by Security Lake, to ensure the replication setting is correct.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}

---

### SecuritylakeDataLakeTags <a name="SecuritylakeDataLakeTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#key SecuritylakeDataLake#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_data_lake#value SecuritylakeDataLake#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeDataLakeEncryptionConfigurationOutputReference <a name="SecuritylakeDataLakeEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

---


### SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfigurationExpiration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---


### SecuritylakeDataLakeLifecycleConfigurationOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeLifecycleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions">PutTransitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetTransitions">ResetTransitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration"></a>

```csharp
private void PutExpiration(SecuritylakeDataLakeLifecycleConfigurationExpiration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---

##### `PutTransitions` <a name="PutTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions"></a>

```csharp
private void PutTransitions(IResolvable|SecuritylakeDataLakeLifecycleConfigurationTransitions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetTransitions` <a name="ResetTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetTransitions"></a>

```csharp
private void ResetTransitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions">Transitions</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList">SecuritylakeDataLakeLifecycleConfigurationTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitionsInput">TransitionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration"></a>

```csharp
public SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference Expiration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a>

---

##### `Transitions`<sup>Required</sup> <a name="Transitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions"></a>

```csharp
public SecuritylakeDataLakeLifecycleConfigurationTransitionsList Transitions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList">SecuritylakeDataLakeLifecycleConfigurationTransitionsList</a>

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expirationInput"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfigurationExpiration ExpirationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---

##### `TransitionsInput`<sup>Optional</sup> <a name="TransitionsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitionsInput"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfigurationTransitions[] TransitionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

---


### SecuritylakeDataLakeLifecycleConfigurationTransitionsList <a name="SecuritylakeDataLakeLifecycleConfigurationTransitionsList" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeLifecycleConfigurationTransitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get"></a>

```csharp
private SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfigurationTransitions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>[]

---


### SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeLifecycleConfigurationTransitions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions">SecuritylakeDataLakeLifecycleConfigurationTransitions</a>

---


### SecuritylakeDataLakeReplicationConfigurationOutputReference <a name="SecuritylakeDataLakeReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeReplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeReplicationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

---


### SecuritylakeDataLakeTagsList <a name="SecuritylakeDataLakeTagsList" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get"></a>

```csharp
private SecuritylakeDataLakeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>[]

---


### SecuritylakeDataLakeTagsOutputReference <a name="SecuritylakeDataLakeTagsOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecuritylakeDataLakeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeDataLakeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags">SecuritylakeDataLakeTags</a>

---



