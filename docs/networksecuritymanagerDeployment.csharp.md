# `networksecuritymanagerDeployment` Submodule <a name="`networksecuritymanagerDeployment` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerDeployment <a name="NetworksecuritymanagerDeployment" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeployment(Construct Scope, string Id, NetworksecuritymanagerDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig">NetworksecuritymanagerDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig">NetworksecuritymanagerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList">PutAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList">PutAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration">PutDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList">ResetAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList">ResetAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration">ResetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription">ResetDeploymentDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedPolicyList` <a name="PutAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList"></a>

```csharp
private void PutAssociatedPolicyList(IResolvable|NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

---

##### `PutAssociatedScopeList` <a name="PutAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList"></a>

```csharp
private void PutAssociatedScopeList(IResolvable|NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

---

##### `PutDeploymentConfiguration` <a name="PutDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration"></a>

```csharp
private void PutDeploymentConfiguration(NetworksecuritymanagerDeploymentDeploymentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworksecuritymanagerDeploymentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

---

##### `ResetAssociatedPolicyList` <a name="ResetAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList"></a>

```csharp
private void ResetAssociatedPolicyList()
```

##### `ResetAssociatedScopeList` <a name="ResetAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList"></a>

```csharp
private void ResetAssociatedScopeList()
```

##### `ResetDeploymentConfiguration` <a name="ResetDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration"></a>

```csharp
private void ResetDeploymentConfiguration()
```

##### `ResetDeploymentDescription` <a name="ResetDeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription"></a>

```csharp
private void ResetDeploymentDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList">AssociatedPolicyList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList">AssociatedScopeList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn">DeploymentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput">AssociatedPolicyListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput">AssociatedScopeListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput">DeploymentConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput">DeploymentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput">DeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription">DeploymentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName">DeploymentName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedPolicyList`<sup>Required</sup> <a name="AssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList"></a>

```csharp
public NetworksecuritymanagerDeploymentAssociatedPolicyListStructList AssociatedPolicyList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a>

---

##### `AssociatedScopeList`<sup>Required</sup> <a name="AssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList"></a>

```csharp
public NetworksecuritymanagerDeploymentAssociatedScopeListStructList AssociatedScopeList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a>

---

##### `DeploymentArn`<sup>Required</sup> <a name="DeploymentArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn"></a>

```csharp
public string DeploymentArn { get; }
```

- *Type:* string

---

##### `DeploymentConfiguration`<sup>Required</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration"></a>

```csharp
public NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference DeploymentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags"></a>

```csharp
public NetworksecuritymanagerDeploymentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AssociatedPolicyListInput`<sup>Optional</sup> <a name="AssociatedPolicyListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] AssociatedPolicyListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

---

##### `AssociatedScopeListInput`<sup>Optional</sup> <a name="AssociatedScopeListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] AssociatedScopeListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

---

##### `DeploymentConfigurationInput`<sup>Optional</sup> <a name="DeploymentConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentDeploymentConfiguration DeploymentConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `DeploymentDescriptionInput`<sup>Optional</sup> <a name="DeploymentDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput"></a>

```csharp
public string DeploymentDescriptionInput { get; }
```

- *Type:* string

---

##### `DeploymentNameInput`<sup>Optional</sup> <a name="DeploymentNameInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput"></a>

```csharp
public string DeploymentNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

---

##### `DeploymentDescription`<sup>Required</sup> <a name="DeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription"></a>

```csharp
public string DeploymentDescription { get; }
```

- *Type:* string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName"></a>

```csharp
public string DeploymentName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStruct <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentAssociatedPolicyListStruct {
    string PolicyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn">PolicyArn</a></code> | <code>string</code> | ARN of the associated policy. |

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn"></a>

```csharp
public string PolicyArn { get; set; }
```

- *Type:* string

ARN of the associated policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#policy_arn NetworksecuritymanagerDeployment#policy_arn}

---

### NetworksecuritymanagerDeploymentAssociatedScopeListStruct <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentAssociatedScopeListStruct {
    string ScopeArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn">ScopeArn</a></code> | <code>string</code> | ARN of the associated scope. |

---

##### `ScopeArn`<sup>Optional</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn"></a>

```csharp
public string ScopeArn { get; set; }
```

- *Type:* string

ARN of the associated scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#scope_arn NetworksecuritymanagerDeployment#scope_arn}

---

### NetworksecuritymanagerDeploymentConfig <a name="NetworksecuritymanagerDeploymentConfig" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeploymentName,
    IResolvable|NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] AssociatedPolicyList = null,
    IResolvable|NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] AssociatedScopeList = null,
    NetworksecuritymanagerDeploymentDeploymentConfiguration DeploymentConfiguration = null,
    string DeploymentDescription = null,
    IResolvable|NetworksecuritymanagerDeploymentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName">DeploymentName</a></code> | <code>string</code> | The name of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList">AssociatedPolicyList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]</code> | List of policies associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList">AssociatedScopeList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]</code> | List of scopes associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | Configuration settings for the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription">DeploymentDescription</a></code> | <code>string</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]</code> | The tags associated with the deployment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName"></a>

```csharp
public string DeploymentName { get; set; }
```

- *Type:* string

The name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}

---

##### `AssociatedPolicyList`<sup>Optional</sup> <a name="AssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] AssociatedPolicyList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

List of policies associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}

---

##### `AssociatedScopeList`<sup>Optional</sup> <a name="AssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] AssociatedScopeList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

List of scopes associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}

---

##### `DeploymentConfiguration`<sup>Optional</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration"></a>

```csharp
public NetworksecuritymanagerDeploymentDeploymentConfiguration DeploymentConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

Configuration settings for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}

---

##### `DeploymentDescription`<sup>Optional</sup> <a name="DeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription"></a>

```csharp
public string DeploymentDescription { get; set; }
```

- *Type:* string

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

The tags associated with the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}

---

### NetworksecuritymanagerDeploymentDeploymentConfiguration <a name="NetworksecuritymanagerDeploymentDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentDeploymentConfiguration {
    bool|IResolvable EnableCrossAccountVisibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility">EnableCrossAccountVisibility</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether cross-account visibility is enabled for the deployment. |

---

##### `EnableCrossAccountVisibility`<sup>Optional</sup> <a name="EnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility"></a>

```csharp
public bool|IResolvable EnableCrossAccountVisibility { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether cross-account visibility is enabled for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}

---

### NetworksecuritymanagerDeploymentTags <a name="NetworksecuritymanagerDeploymentTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStructList <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentAssociatedPolicyListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get"></a>

```csharp
private NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

---


### NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn"></a>

```csharp
private void ResetPolicyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput">PolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput"></a>

```csharp
public string PolicyArnInput { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedPolicyListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructList <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentAssociatedScopeListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get"></a>

```csharp
private NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn">ResetScopeArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopeArn` <a name="ResetScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn"></a>

```csharp
private void ResetScopeArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput">ScopeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn">ScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeArnInput`<sup>Optional</sup> <a name="ScopeArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput"></a>

```csharp
public string ScopeArnInput { get; }
```

- *Type:* string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn"></a>

```csharp
public string ScopeArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentAssociatedScopeListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>

---


### NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference <a name="NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility">ResetEnableCrossAccountVisibility</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableCrossAccountVisibility` <a name="ResetEnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility"></a>

```csharp
private void ResetEnableCrossAccountVisibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput">EnableCrossAccountVisibilityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility">EnableCrossAccountVisibility</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCrossAccountVisibilityInput`<sup>Optional</sup> <a name="EnableCrossAccountVisibilityInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput"></a>

```csharp
public bool|IResolvable EnableCrossAccountVisibilityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCrossAccountVisibility`<sup>Required</sup> <a name="EnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility"></a>

```csharp
public bool|IResolvable EnableCrossAccountVisibility { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentDeploymentConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---


### NetworksecuritymanagerDeploymentTagsList <a name="NetworksecuritymanagerDeploymentTagsList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get"></a>

```csharp
private NetworksecuritymanagerDeploymentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

---


### NetworksecuritymanagerDeploymentTagsOutputReference <a name="NetworksecuritymanagerDeploymentTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerDeploymentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerDeploymentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>

---



