# `ecrReplicationConfiguration` Submodule <a name="`ecrReplicationConfiguration` Submodule" id="@cdktn/provider-awscc.ecrReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrReplicationConfiguration <a name="EcrReplicationConfiguration" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration awscc_ecr_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfiguration(Construct Scope, string Id, EcrReplicationConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig">EcrReplicationConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig">EcrReplicationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration"></a>

```csharp
private void PutReplicationConfiguration(EcrReplicationConfigurationReplicationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcrReplicationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrReplicationConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrReplicationConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrReplicationConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcrReplicationConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcrReplicationConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrReplicationConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrReplicationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcrReplicationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationOutputReference ReplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a>

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfiguration ReplicationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrReplicationConfigurationConfig <a name="EcrReplicationConfigurationConfig" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    EcrReplicationConfigurationReplicationConfiguration ReplicationConfiguration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | The replication configuration for a registry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration"></a>

```csharp
public EcrReplicationConfigurationReplicationConfiguration ReplicationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

The replication configuration for a registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}

---

### EcrReplicationConfigurationReplicationConfiguration <a name="EcrReplicationConfigurationReplicationConfiguration" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfiguration {
    IResolvable|EcrReplicationConfigurationReplicationConfigurationRules[] Rules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>[]</code> | An array of objects representing the replication destinations and repository filters for a replication configuration. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rules"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>[]

An array of objects representing the replication destinations and repository filters for a replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#rules EcrReplicationConfiguration#rules}

---

### EcrReplicationConfigurationReplicationConfigurationRules <a name="EcrReplicationConfigurationReplicationConfigurationRules" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRules {
    IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] Destinations,
    IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] RepositoryFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>[]</code> | An array of objects representing the destination for a replication rule. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules.property.repositoryFilters">RepositoryFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>[]</code> | An array of objects representing the filters for a replication rule. |

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules.property.destinations"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>[]

An array of objects representing the destination for a replication rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#destinations EcrReplicationConfiguration#destinations}

---

##### `RepositoryFilters`<sup>Optional</sup> <a name="RepositoryFilters" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules.property.repositoryFilters"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] RepositoryFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>[]

An array of objects representing the filters for a replication rule.

Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#repository_filters EcrReplicationConfiguration#repository_filters}

---

### EcrReplicationConfigurationReplicationConfigurationRulesDestinations <a name="EcrReplicationConfigurationReplicationConfigurationRulesDestinations" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesDestinations {
    string Region,
    string RegistryId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations.property.region">Region</a></code> | <code>string</code> | The Region to replicate to. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations.property.registryId">RegistryId</a></code> | <code>string</code> | The AWS account ID of the Amazon ECR private registry to replicate to. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region to replicate to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#region EcrReplicationConfiguration#region}

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations.property.registryId"></a>

```csharp
public string RegistryId { get; set; }
```

- *Type:* string

The AWS account ID of the Amazon ECR private registry to replicate to.

When configuring cross-Region replication within your own registry, specify your own account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}

---

### EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters <a name="EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters {
    string Filter = null,
    string FilterType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters.property.filter">Filter</a></code> | <code>string</code> | The repository filter details. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters.property.filterType">FilterType</a></code> | <code>string</code> | The repository filter type. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The repository filter details.

When the `PREFIX_MATCH` filter type is specified, this value is required and should be the repository name prefix to configure replication for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

The repository filter type.

The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the `filter` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrReplicationConfigurationReplicationConfigurationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|EcrReplicationConfigurationReplicationConfigurationRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList">EcrReplicationConfigurationReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rules"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList">EcrReplicationConfigurationReplicationConfigurationRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---


### EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList <a name="EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.get"></a>

```csharp
private EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>[]

---


### EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.registryIdInput">RegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegistryIdInput`<sup>Optional</sup> <a name="RegistryIdInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.registryIdInput"></a>

```csharp
public string RegistryIdInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>

---


### EcrReplicationConfigurationReplicationConfigurationRulesList <a name="EcrReplicationConfigurationReplicationConfigurationRulesList" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.get"></a>

```csharp
private EcrReplicationConfigurationReplicationConfigurationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesList.property.internalValue"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>[]

---


### EcrReplicationConfigurationReplicationConfigurationRulesOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRulesOutputReference" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.putRepositoryFilters">PutRepositoryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resetRepositoryFilters">ResetRepositoryFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>[]

---

##### `PutRepositoryFilters` <a name="PutRepositoryFilters" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.putRepositoryFilters"></a>

```csharp
private void PutRepositoryFilters(IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.putRepositoryFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>[]

---

##### `ResetRepositoryFilters` <a name="ResetRepositoryFilters" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.resetRepositoryFilters"></a>

```csharp
private void ResetRepositoryFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList">EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.repositoryFilters">RepositoryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.repositoryFiltersInput">RepositoryFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.destinations"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList">EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList</a>

---

##### `RepositoryFilters`<sup>Required</sup> <a name="RepositoryFilters" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.repositoryFilters"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList RepositoryFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesDestinations">EcrReplicationConfigurationReplicationConfigurationRulesDestinations</a>[]

---

##### `RepositoryFiltersInput`<sup>Optional</sup> <a name="RepositoryFiltersInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.repositoryFiltersInput"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] RepositoryFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRules">EcrReplicationConfigurationReplicationConfigurationRules</a>

---


### EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList <a name="EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.get"></a>

```csharp
private EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList.property.internalValue"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>[]

---


### EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.resetFilterType"></a>

```csharp
private void ResetFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters">EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters</a>

---



