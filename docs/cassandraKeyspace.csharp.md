# `cassandraKeyspace` Submodule <a name="`cassandraKeyspace` Submodule" id="@cdktn/provider-awscc.cassandraKeyspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CassandraKeyspace <a name="CassandraKeyspace" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace awscc_cassandra_keyspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraKeyspace(Construct Scope, string Id, CassandraKeyspaceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig">CassandraKeyspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig">CassandraKeyspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putReplicationSpecification">PutReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetClientSideTimestampsEnabled">ResetClientSideTimestampsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetKeyspaceName">ResetKeyspaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetReplicationSpecification">ResetReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplicationSpecification` <a name="PutReplicationSpecification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putReplicationSpecification"></a>

```csharp
private void PutReplicationSpecification(CassandraKeyspaceReplicationSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putReplicationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putTags"></a>

```csharp
private void PutTags(IResolvable|CassandraKeyspaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>[]

---

##### `ResetClientSideTimestampsEnabled` <a name="ResetClientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetClientSideTimestampsEnabled"></a>

```csharp
private void ResetClientSideTimestampsEnabled()
```

##### `ResetKeyspaceName` <a name="ResetKeyspaceName" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetKeyspaceName"></a>

```csharp
private void ResetKeyspaceName()
```

##### `ResetReplicationSpecification` <a name="ResetReplicationSpecification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetReplicationSpecification"></a>

```csharp
private void ResetReplicationSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CassandraKeyspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraKeyspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraKeyspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraKeyspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraKeyspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CassandraKeyspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CassandraKeyspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CassandraKeyspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CassandraKeyspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecification">ReplicationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference">CassandraKeyspaceReplicationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList">CassandraKeyspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabledInput">ClientSideTimestampsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceNameInput">KeyspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecificationInput">ReplicationSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabled">ClientSideTimestampsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceName">KeyspaceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReplicationSpecification`<sup>Required</sup> <a name="ReplicationSpecification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecification"></a>

```csharp
public CassandraKeyspaceReplicationSpecificationOutputReference ReplicationSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference">CassandraKeyspaceReplicationSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tags"></a>

```csharp
public CassandraKeyspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList">CassandraKeyspaceTagsList</a>

---

##### `ClientSideTimestampsEnabledInput`<sup>Optional</sup> <a name="ClientSideTimestampsEnabledInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabledInput"></a>

```csharp
public bool|IResolvable ClientSideTimestampsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyspaceNameInput`<sup>Optional</sup> <a name="KeyspaceNameInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceNameInput"></a>

```csharp
public string KeyspaceNameInput { get; }
```

- *Type:* string

---

##### `ReplicationSpecificationInput`<sup>Optional</sup> <a name="ReplicationSpecificationInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.replicationSpecificationInput"></a>

```csharp
public IResolvable|CassandraKeyspaceReplicationSpecification ReplicationSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tagsInput"></a>

```csharp
public IResolvable|CassandraKeyspaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>[]

---

##### `ClientSideTimestampsEnabled`<sup>Required</sup> <a name="ClientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.clientSideTimestampsEnabled"></a>

```csharp
public bool|IResolvable ClientSideTimestampsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyspaceName`<sup>Required</sup> <a name="KeyspaceName" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.keyspaceName"></a>

```csharp
public string KeyspaceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CassandraKeyspaceConfig <a name="CassandraKeyspaceConfig" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraKeyspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable ClientSideTimestampsEnabled = null,
    string KeyspaceName = null,
    CassandraKeyspaceReplicationSpecification ReplicationSpecification = null,
    IResolvable|CassandraKeyspaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.clientSideTimestampsEnabled">ClientSideTimestampsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.keyspaceName">KeyspaceName</a></code> | <code>string</code> | Name for Cassandra keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.replicationSpecification">ReplicationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#replication_specification CassandraKeyspace#replication_specification}. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#tags CassandraKeyspace#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientSideTimestampsEnabled`<sup>Optional</sup> <a name="ClientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.clientSideTimestampsEnabled"></a>

```csharp
public bool|IResolvable ClientSideTimestampsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace.

To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you enabled client-side timestamps for a table, you can?t disable it again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#client_side_timestamps_enabled CassandraKeyspace#client_side_timestamps_enabled}

---

##### `KeyspaceName`<sup>Optional</sup> <a name="KeyspaceName" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.keyspaceName"></a>

```csharp
public string KeyspaceName { get; set; }
```

- *Type:* string

Name for Cassandra keyspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#keyspace_name CassandraKeyspace#keyspace_name}

---

##### `ReplicationSpecification`<sup>Optional</sup> <a name="ReplicationSpecification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.replicationSpecification"></a>

```csharp
public CassandraKeyspaceReplicationSpecification ReplicationSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#replication_specification CassandraKeyspace#replication_specification}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceConfig.property.tags"></a>

```csharp
public IResolvable|CassandraKeyspaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#tags CassandraKeyspace#tags}.

---

### CassandraKeyspaceReplicationSpecification <a name="CassandraKeyspaceReplicationSpecification" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraKeyspaceReplicationSpecification {
    string[] RegionList = null,
    string ReplicationStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.regionList">RegionList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#region_list CassandraKeyspace#region_list}. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.replicationStrategy">ReplicationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#replication_strategy CassandraKeyspace#replication_strategy}. |

---

##### `RegionList`<sup>Optional</sup> <a name="RegionList" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.regionList"></a>

```csharp
public string[] RegionList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#region_list CassandraKeyspace#region_list}.

---

##### `ReplicationStrategy`<sup>Optional</sup> <a name="ReplicationStrategy" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification.property.replicationStrategy"></a>

```csharp
public string ReplicationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#replication_strategy CassandraKeyspace#replication_strategy}.

---

### CassandraKeyspaceTags <a name="CassandraKeyspaceTags" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraKeyspaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#key CassandraKeyspace#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#value CassandraKeyspace#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#key CassandraKeyspace#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_keyspace#value CassandraKeyspace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CassandraKeyspaceReplicationSpecificationOutputReference <a name="CassandraKeyspaceReplicationSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraKeyspaceReplicationSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetRegionList">ResetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy">ResetReplicationStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionList` <a name="ResetRegionList" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetRegionList"></a>

```csharp
private void ResetRegionList()
```

##### `ResetReplicationStrategy` <a name="ResetReplicationStrategy" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy"></a>

```csharp
private void ResetReplicationStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionListInput">RegionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput">ReplicationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionList">RegionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy">ReplicationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionListInput`<sup>Optional</sup> <a name="RegionListInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionListInput"></a>

```csharp
public string[] RegionListInput { get; }
```

- *Type:* string[]

---

##### `ReplicationStrategyInput`<sup>Optional</sup> <a name="ReplicationStrategyInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput"></a>

```csharp
public string ReplicationStrategyInput { get; }
```

- *Type:* string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.regionList"></a>

```csharp
public string[] RegionList { get; }
```

- *Type:* string[]

---

##### `ReplicationStrategy`<sup>Required</sup> <a name="ReplicationStrategy" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy"></a>

```csharp
public string ReplicationStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraKeyspaceReplicationSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceReplicationSpecification">CassandraKeyspaceReplicationSpecification</a>

---


### CassandraKeyspaceTagsList <a name="CassandraKeyspaceTagsList" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraKeyspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.get"></a>

```csharp
private CassandraKeyspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|CassandraKeyspaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>[]

---


### CassandraKeyspaceTagsOutputReference <a name="CassandraKeyspaceTagsOutputReference" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraKeyspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraKeyspaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraKeyspace.CassandraKeyspaceTags">CassandraKeyspaceTags</a>

---



