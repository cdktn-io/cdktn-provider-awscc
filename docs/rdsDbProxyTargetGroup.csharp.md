# `rdsDbProxyTargetGroup` Submodule <a name="`rdsDbProxyTargetGroup` Submodule" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxyTargetGroup <a name="RdsDbProxyTargetGroup" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyTargetGroup(Construct Scope, string Id, RdsDbProxyTargetGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig">RdsDbProxyTargetGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig">RdsDbProxyTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo">PutConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo">ResetConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers">ResetDbClusterIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers">ResetDbInstanceIdentifiers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionPoolConfigurationInfo` <a name="PutConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo"></a>

```csharp
private void PutConnectionPoolConfigurationInfo(RdsDbProxyTargetGroupConnectionPoolConfigurationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---

##### `ResetConnectionPoolConfigurationInfo` <a name="ResetConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo"></a>

```csharp
private void ResetConnectionPoolConfigurationInfo()
```

##### `ResetDbClusterIdentifiers` <a name="ResetDbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers"></a>

```csharp
private void ResetDbClusterIdentifiers()
```

##### `ResetDbInstanceIdentifiers` <a name="ResetDbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers"></a>

```csharp
private void ResetDbInstanceIdentifiers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxyTargetGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxyTargetGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxyTargetGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbProxyTargetGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbProxyTargetGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbProxyTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxyTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo">ConnectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput">ConnectionPoolConfigurationInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput">DbClusterIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput">DbInstanceIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput">DbProxyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput">TargetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers">DbClusterIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers">DbInstanceIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName">DbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName">TargetGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionPoolConfigurationInfo`<sup>Required</sup> <a name="ConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo"></a>

```csharp
public RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference ConnectionPoolConfigurationInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `ConnectionPoolConfigurationInfoInput`<sup>Optional</sup> <a name="ConnectionPoolConfigurationInfoInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput"></a>

```csharp
public IResolvable|RdsDbProxyTargetGroupConnectionPoolConfigurationInfo ConnectionPoolConfigurationInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---

##### `DbClusterIdentifiersInput`<sup>Optional</sup> <a name="DbClusterIdentifiersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput"></a>

```csharp
public string[] DbClusterIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `DbInstanceIdentifiersInput`<sup>Optional</sup> <a name="DbInstanceIdentifiersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput"></a>

```csharp
public string[] DbInstanceIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `DbProxyNameInput`<sup>Optional</sup> <a name="DbProxyNameInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput"></a>

```csharp
public string DbProxyNameInput { get; }
```

- *Type:* string

---

##### `TargetGroupNameInput`<sup>Optional</sup> <a name="TargetGroupNameInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput"></a>

```csharp
public string TargetGroupNameInput { get; }
```

- *Type:* string

---

##### `DbClusterIdentifiers`<sup>Required</sup> <a name="DbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers"></a>

```csharp
public string[] DbClusterIdentifiers { get; }
```

- *Type:* string[]

---

##### `DbInstanceIdentifiers`<sup>Required</sup> <a name="DbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers"></a>

```csharp
public string[] DbInstanceIdentifiers { get; }
```

- *Type:* string[]

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName"></a>

```csharp
public string DbProxyName { get; }
```

- *Type:* string

---

##### `TargetGroupName`<sup>Required</sup> <a name="TargetGroupName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName"></a>

```csharp
public string TargetGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyTargetGroupConfig <a name="RdsDbProxyTargetGroupConfig" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyTargetGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DbProxyName,
    string TargetGroupName,
    RdsDbProxyTargetGroupConnectionPoolConfigurationInfo ConnectionPoolConfigurationInfo = null,
    string[] DbClusterIdentifiers = null,
    string[] DbInstanceIdentifiers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName">DbProxyName</a></code> | <code>string</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName">TargetGroupName</a></code> | <code>string</code> | The identifier for the DBProxyTargetGroup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo">ConnectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers">DbClusterIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers">DbInstanceIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName"></a>

```csharp
public string DbProxyName { get; set; }
```

- *Type:* string

The identifier for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#db_proxy_name RdsDbProxyTargetGroup#db_proxy_name}

---

##### `TargetGroupName`<sup>Required</sup> <a name="TargetGroupName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName"></a>

```csharp
public string TargetGroupName { get; set; }
```

- *Type:* string

The identifier for the DBProxyTargetGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#target_group_name RdsDbProxyTargetGroup#target_group_name}

---

##### `ConnectionPoolConfigurationInfo`<sup>Optional</sup> <a name="ConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo"></a>

```csharp
public RdsDbProxyTargetGroupConnectionPoolConfigurationInfo ConnectionPoolConfigurationInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}.

---

##### `DbClusterIdentifiers`<sup>Optional</sup> <a name="DbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers"></a>

```csharp
public string[] DbClusterIdentifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}.

---

##### `DbInstanceIdentifiers`<sup>Optional</sup> <a name="DbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers"></a>

```csharp
public string[] DbInstanceIdentifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}.

---

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfo <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyTargetGroupConnectionPoolConfigurationInfo {
    double ConnectionBorrowTimeout = null,
    string InitQuery = null,
    double MaxConnectionsPercent = null,
    double MaxIdleConnectionsPercent = null,
    string[] SessionPinningFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout">ConnectionBorrowTimeout</a></code> | <code>double</code> | The number of seconds for a proxy to wait for a connection to become available in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery">InitQuery</a></code> | <code>string</code> | One or more SQL statements for the proxy to run when opening each new database connection. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent">MaxConnectionsPercent</a></code> | <code>double</code> | The maximum size of the connection pool for each target in a target group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent">MaxIdleConnectionsPercent</a></code> | <code>double</code> | Controls how actively the proxy closes idle database connections in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters">SessionPinningFilters</a></code> | <code>string[]</code> | Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. |

---

##### `ConnectionBorrowTimeout`<sup>Optional</sup> <a name="ConnectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout"></a>

```csharp
public double ConnectionBorrowTimeout { get; set; }
```

- *Type:* double

The number of seconds for a proxy to wait for a connection to become available in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#connection_borrow_timeout RdsDbProxyTargetGroup#connection_borrow_timeout}

---

##### `InitQuery`<sup>Optional</sup> <a name="InitQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery"></a>

```csharp
public string InitQuery { get; set; }
```

- *Type:* string

One or more SQL statements for the proxy to run when opening each new database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#init_query RdsDbProxyTargetGroup#init_query}

---

##### `MaxConnectionsPercent`<sup>Optional</sup> <a name="MaxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent"></a>

```csharp
public double MaxConnectionsPercent { get; set; }
```

- *Type:* double

The maximum size of the connection pool for each target in a target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#max_connections_percent RdsDbProxyTargetGroup#max_connections_percent}

---

##### `MaxIdleConnectionsPercent`<sup>Optional</sup> <a name="MaxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent"></a>

```csharp
public double MaxIdleConnectionsPercent { get; set; }
```

- *Type:* double

Controls how actively the proxy closes idle database connections in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#max_idle_connections_percent RdsDbProxyTargetGroup#max_idle_connections_percent}

---

##### `SessionPinningFilters`<sup>Optional</sup> <a name="SessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters"></a>

```csharp
public string[] SessionPinningFilters { get; set; }
```

- *Type:* string[]

Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy_target_group#session_pinning_filters RdsDbProxyTargetGroup#session_pinning_filters}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout">ResetConnectionBorrowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery">ResetInitQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent">ResetMaxConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent">ResetMaxIdleConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters">ResetSessionPinningFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionBorrowTimeout` <a name="ResetConnectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout"></a>

```csharp
private void ResetConnectionBorrowTimeout()
```

##### `ResetInitQuery` <a name="ResetInitQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery"></a>

```csharp
private void ResetInitQuery()
```

##### `ResetMaxConnectionsPercent` <a name="ResetMaxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent"></a>

```csharp
private void ResetMaxConnectionsPercent()
```

##### `ResetMaxIdleConnectionsPercent` <a name="ResetMaxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent"></a>

```csharp
private void ResetMaxIdleConnectionsPercent()
```

##### `ResetSessionPinningFilters` <a name="ResetSessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters"></a>

```csharp
private void ResetSessionPinningFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput">ConnectionBorrowTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput">InitQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput">MaxConnectionsPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput">MaxIdleConnectionsPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput">SessionPinningFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout">ConnectionBorrowTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery">InitQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent">MaxConnectionsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent">MaxIdleConnectionsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters">SessionPinningFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionBorrowTimeoutInput`<sup>Optional</sup> <a name="ConnectionBorrowTimeoutInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput"></a>

```csharp
public double ConnectionBorrowTimeoutInput { get; }
```

- *Type:* double

---

##### `InitQueryInput`<sup>Optional</sup> <a name="InitQueryInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput"></a>

```csharp
public string InitQueryInput { get; }
```

- *Type:* string

---

##### `MaxConnectionsPercentInput`<sup>Optional</sup> <a name="MaxConnectionsPercentInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput"></a>

```csharp
public double MaxConnectionsPercentInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsPercentInput`<sup>Optional</sup> <a name="MaxIdleConnectionsPercentInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput"></a>

```csharp
public double MaxIdleConnectionsPercentInput { get; }
```

- *Type:* double

---

##### `SessionPinningFiltersInput`<sup>Optional</sup> <a name="SessionPinningFiltersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput"></a>

```csharp
public string[] SessionPinningFiltersInput { get; }
```

- *Type:* string[]

---

##### `ConnectionBorrowTimeout`<sup>Required</sup> <a name="ConnectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout"></a>

```csharp
public double ConnectionBorrowTimeout { get; }
```

- *Type:* double

---

##### `InitQuery`<sup>Required</sup> <a name="InitQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery"></a>

```csharp
public string InitQuery { get; }
```

- *Type:* string

---

##### `MaxConnectionsPercent`<sup>Required</sup> <a name="MaxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent"></a>

```csharp
public double MaxConnectionsPercent { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsPercent`<sup>Required</sup> <a name="MaxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent"></a>

```csharp
public double MaxIdleConnectionsPercent { get; }
```

- *Type:* double

---

##### `SessionPinningFilters`<sup>Required</sup> <a name="SessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters"></a>

```csharp
public string[] SessionPinningFilters { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbProxyTargetGroupConnectionPoolConfigurationInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---



