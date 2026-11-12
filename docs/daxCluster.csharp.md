# `daxCluster` Submodule <a name="`daxCluster` Submodule" id="@cdktn/provider-awscc.daxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DaxCluster <a name="DaxCluster" id="@cdktn/provider-awscc.daxCluster.DaxCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster awscc_dax_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DaxCluster(Construct Scope, string Id, DaxClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig">DaxClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig">DaxClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterEndpointEncryptionType">ResetClusterEndpointEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSubnetGroupName">ResetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.daxCluster.DaxCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.daxCluster.DaxCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.daxCluster.DaxCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification"></a>

```csharp
private void PutSseSpecification(DaxClusterSseSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetClusterEndpointEncryptionType` <a name="ResetClusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterEndpointEncryptionType"></a>

```csharp
private void ResetClusterEndpointEncryptionType()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetNotificationTopicArn"></a>

```csharp
private void ResetNotificationTopicArn()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetParameterGroupName"></a>

```csharp
private void ResetParameterGroupName()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSseSpecification"></a>

```csharp
private void ResetSseSpecification()
```

##### `ResetSubnetGroupName` <a name="ResetSubnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSubnetGroupName"></a>

```csharp
private void ResetSubnetGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DaxCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DaxCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DaxCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DaxCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DaxCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DaxCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DaxCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DaxCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DaxCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpoint">ClusterDiscoveryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpointUrl">ClusterDiscoveryEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference">DaxClusterSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput">ClusterEndpointEncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionType">ClusterEndpointEncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tags">Tags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterDiscoveryEndpoint`<sup>Required</sup> <a name="ClusterDiscoveryEndpoint" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpoint"></a>

```csharp
public string ClusterDiscoveryEndpoint { get; }
```

- *Type:* string

---

##### `ClusterDiscoveryEndpointUrl`<sup>Required</sup> <a name="ClusterDiscoveryEndpointUrl" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpointUrl"></a>

```csharp
public string ClusterDiscoveryEndpointUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecification"></a>

```csharp
public DaxClusterSseSpecificationOutputReference SseSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference">DaxClusterSseSpecificationOutputReference</a>

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `ClusterEndpointEncryptionTypeInput`<sup>Optional</sup> <a name="ClusterEndpointEncryptionTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput"></a>

```csharp
public string ClusterEndpointEncryptionTypeInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArnInput"></a>

```csharp
public string NotificationTopicArnInput { get; }
```

- *Type:* string

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupNameInput"></a>

```csharp
public string ParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactorInput"></a>

```csharp
public double ReplicationFactorInput { get; }
```

- *Type:* double

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecificationInput"></a>

```csharp
public IResolvable|DaxClusterSseSpecification SseSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupNameInput"></a>

```csharp
public string SubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `ClusterEndpointEncryptionType`<sup>Required</sup> <a name="ClusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionType"></a>

```csharp
public string ClusterEndpointEncryptionType { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; }
```

- *Type:* string

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; }
```

- *Type:* double

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DaxClusterConfig <a name="DaxClusterConfig" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DaxClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IamRoleArn,
    string NodeType,
    double ReplicationFactor,
    string[] AvailabilityZones = null,
    string ClusterEndpointEncryptionType = null,
    string ClusterName = null,
    string Description = null,
    string NetworkType = null,
    string NotificationTopicArn = null,
    string ParameterGroupName = null,
    string PreferredMaintenanceWindow = null,
    string[] SecurityGroupIds = null,
    DaxClusterSseSpecification SseSpecification = null,
    string SubnetGroupName = null,
    string Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType">ClusterEndpointEncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.tags">Tags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}.

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}.

---

##### `ClusterEndpointEncryptionType`<sup>Optional</sup> <a name="ClusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType"></a>

```csharp
public string ClusterEndpointEncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}.

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}.

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.sseSpecification"></a>

```csharp
public DaxClusterSseSpecification SseSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}.

---

##### `SubnetGroupName`<sup>Optional</sup> <a name="SubnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}.

---

### DaxClusterSseSpecification <a name="DaxClusterSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DaxClusterSseSpecification {
    bool|IResolvable SseEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.property.sseEnabled">SseEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_enabled DaxCluster#sse_enabled}. |

---

##### `SseEnabled`<sup>Optional</sup> <a name="SseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.property.sseEnabled"></a>

```csharp
public bool|IResolvable SseEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_enabled DaxCluster#sse_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DaxClusterSseSpecificationOutputReference <a name="DaxClusterSseSpecificationOutputReference" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DaxClusterSseSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resetSseEnabled">ResetSseEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSseEnabled` <a name="ResetSseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resetSseEnabled"></a>

```csharp
private void ResetSseEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabledInput">SseEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabled">SseEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SseEnabledInput`<sup>Optional</sup> <a name="SseEnabledInput" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabledInput"></a>

```csharp
public bool|IResolvable SseEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SseEnabled`<sup>Required</sup> <a name="SseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabled"></a>

```csharp
public bool|IResolvable SseEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DaxClusterSseSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---



