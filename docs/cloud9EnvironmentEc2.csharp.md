# `cloud9EnvironmentEc2` Submodule <a name="`cloud9EnvironmentEc2` Submodule" id="@cdktn/provider-awscc.cloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentEc2 <a name="Cloud9EnvironmentEc2" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2 awscc_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2(Construct Scope, string Id, Cloud9EnvironmentEc2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories">PutRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes">ResetAutomaticStopTimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn">ResetOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRepositories">ResetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRepositories` <a name="PutRepositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories"></a>

```csharp
private void PutRepositories(IResolvable|Cloud9EnvironmentEc2Repositories[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags"></a>

```csharp
private void PutTags(IResolvable|Cloud9EnvironmentEc2Tags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

---

##### `ResetAutomaticStopTimeMinutes` <a name="ResetAutomaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes"></a>

```csharp
private void ResetAutomaticStopTimeMinutes()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwnerArn` <a name="ResetOwnerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn"></a>

```csharp
private void ResetOwnerArn()
```

##### `ResetRepositories` <a name="ResetRepositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRepositories"></a>

```csharp
private void ResetRepositories()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Cloud9EnvironmentEc2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Cloud9EnvironmentEc2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Cloud9EnvironmentEc2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Cloud9EnvironmentEc2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cloud9EnvironmentEc2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cloud9EnvironmentEc2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Cloud9EnvironmentEc2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositories">Repositories</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList">Cloud9EnvironmentEc2RepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList">Cloud9EnvironmentEc2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput">AutomaticStopTimeMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput">OwnerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositoriesInput">RepositoriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes">AutomaticStopTimeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn">OwnerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositories"></a>

```csharp
public Cloud9EnvironmentEc2RepositoriesList Repositories { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList">Cloud9EnvironmentEc2RepositoriesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags"></a>

```csharp
public Cloud9EnvironmentEc2TagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList">Cloud9EnvironmentEc2TagsList</a>

---

##### `AutomaticStopTimeMinutesInput`<sup>Optional</sup> <a name="AutomaticStopTimeMinutesInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput"></a>

```csharp
public double AutomaticStopTimeMinutesInput { get; }
```

- *Type:* double

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerArnInput`<sup>Optional</sup> <a name="OwnerArnInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput"></a>

```csharp
public string OwnerArnInput { get; }
```

- *Type:* string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositoriesInput"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Repositories[] RepositoriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Tags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

---

##### `AutomaticStopTimeMinutes`<sup>Required</sup> <a name="AutomaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```csharp
public double AutomaticStopTimeMinutes { get; }
```

- *Type:* double

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerArn`<sup>Required</sup> <a name="OwnerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn"></a>

```csharp
public string OwnerArn { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentEc2Config <a name="Cloud9EnvironmentEc2Config" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double AutomaticStopTimeMinutes = null,
    string ConnectionType = null,
    string Description = null,
    string ImageId = null,
    string InstanceType = null,
    string Name = null,
    string OwnerArn = null,
    IResolvable|Cloud9EnvironmentEc2Repositories[] Repositories = null,
    string SubnetId = null,
    IResolvable|Cloud9EnvironmentEc2Tags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes">AutomaticStopTimeMinutes</a></code> | <code>double</code> | The number of minutes until the running instance is shut down after the environment was last used. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType">ConnectionType</a></code> | <code>string</code> | The connection type used for connecting to an Amazon EC2 environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description">Description</a></code> | <code>string</code> | The description of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId">ImageId</a></code> | <code>string</code> | The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType">InstanceType</a></code> | <code>string</code> | The type of instance to connect to the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name">Name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn">OwnerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the environment owner. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.repositories">Repositories</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]</code> | Any AWS CodeCommit source code repositories to be cloned into the development environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet in Amazon VPC that AWS Cloud9 will use. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]</code> | An array of key-value pairs that will be associated with the new AWS Cloud9 development environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutomaticStopTimeMinutes`<sup>Optional</sup> <a name="AutomaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes"></a>

```csharp
public double AutomaticStopTimeMinutes { get; set; }
```

- *Type:* double

The number of minutes until the running instance is shut down after the environment was last used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

The connection type used for connecting to an Amazon EC2 environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The type of instance to connect to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}

---

##### `OwnerArn`<sup>Optional</sup> <a name="OwnerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn"></a>

```csharp
public string OwnerArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the environment owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}

---

##### `Repositories`<sup>Optional</sup> <a name="Repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.repositories"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Repositories[] Repositories { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

Any AWS CodeCommit source code repositories to be cloned into the development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#repositories Cloud9EnvironmentEc2#repositories}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet in Amazon VPC that AWS Cloud9 will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Tags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}

---

### Cloud9EnvironmentEc2Repositories <a name="Cloud9EnvironmentEc2Repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2Repositories {
    string PathComponent = null,
    string RepositoryUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.pathComponent">PathComponent</a></code> | <code>string</code> | The path within the development environment's default file system location to clone the AWS CodeCommit repository into. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | The clone URL of the AWS CodeCommit repository to be cloned. |

---

##### `PathComponent`<sup>Optional</sup> <a name="PathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.pathComponent"></a>

```csharp
public string PathComponent { get; set; }
```

- *Type:* string

The path within the development environment's default file system location to clone the AWS CodeCommit repository into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#path_component Cloud9EnvironmentEc2#path_component}

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

The clone URL of the AWS CodeCommit repository to be cloned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#repository_url Cloud9EnvironmentEc2#repository_url}

---

### Cloud9EnvironmentEc2Tags <a name="Cloud9EnvironmentEc2Tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2Tags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#key Cloud9EnvironmentEc2#key}. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#value Cloud9EnvironmentEc2#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#key Cloud9EnvironmentEc2#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#value Cloud9EnvironmentEc2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloud9EnvironmentEc2RepositoriesList <a name="Cloud9EnvironmentEc2RepositoriesList" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2RepositoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get"></a>

```csharp
private Cloud9EnvironmentEc2RepositoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.internalValue"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Repositories[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>[]

---


### Cloud9EnvironmentEc2RepositoriesOutputReference <a name="Cloud9EnvironmentEc2RepositoriesOutputReference" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2RepositoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetPathComponent">ResetPathComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathComponent` <a name="ResetPathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetPathComponent"></a>

```csharp
private void ResetPathComponent()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetRepositoryUrl"></a>

```csharp
private void ResetRepositoryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponentInput">PathComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent">PathComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathComponentInput`<sup>Optional</sup> <a name="PathComponentInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponentInput"></a>

```csharp
public string PathComponentInput { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `PathComponent`<sup>Required</sup> <a name="PathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent"></a>

```csharp
public string PathComponent { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Repositories InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>

---


### Cloud9EnvironmentEc2TagsList <a name="Cloud9EnvironmentEc2TagsList" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2TagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get"></a>

```csharp
private Cloud9EnvironmentEc2TagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.internalValue"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Tags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>[]

---


### Cloud9EnvironmentEc2TagsOutputReference <a name="Cloud9EnvironmentEc2TagsOutputReference" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Cloud9EnvironmentEc2TagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Cloud9EnvironmentEc2Tags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>

---



