# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktn/provider-awscc.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectory(Construct Scope, string Id, WorkspacesDirectoryConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig">PutActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties">PutCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig">PutMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties">PutSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions">PutSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties">PutStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">PutWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">PutWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig">ResetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties">ResetCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService">ResetEnableSelfService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode">ResetEndpointEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn">ResetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">ResetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig">ResetMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties">ResetSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions">ResetSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties">ResetStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType">ResetUserIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">ResetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">ResetWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription">ResetWorkspaceDirectoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName">ResetWorkspaceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType">ResetWorkspaceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActiveDirectoryConfig` <a name="PutActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig"></a>

```csharp
private void PutActiveDirectoryConfig(WorkspacesDirectoryActiveDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `PutCertificateBasedAuthProperties` <a name="PutCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties"></a>

```csharp
private void PutCertificateBasedAuthProperties(WorkspacesDirectoryCertificateBasedAuthProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `PutMicrosoftEntraConfig` <a name="PutMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig"></a>

```csharp
private void PutMicrosoftEntraConfig(WorkspacesDirectoryMicrosoftEntraConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `PutSamlProperties` <a name="PutSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties"></a>

```csharp
private void PutSamlProperties(WorkspacesDirectorySamlProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `PutSelfservicePermissions` <a name="PutSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions"></a>

```csharp
private void PutSelfservicePermissions(WorkspacesDirectorySelfservicePermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `PutStreamingProperties` <a name="PutStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties"></a>

```csharp
private void PutStreamingProperties(WorkspacesDirectoryStreamingProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags"></a>

```csharp
private void PutTags(IResolvable|WorkspacesDirectoryTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

---

##### `PutWorkspaceAccessProperties` <a name="PutWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```csharp
private void PutWorkspaceAccessProperties(WorkspacesDirectoryWorkspaceAccessProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `PutWorkspaceCreationProperties` <a name="PutWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```csharp
private void PutWorkspaceCreationProperties(WorkspacesDirectoryWorkspaceCreationProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `ResetActiveDirectoryConfig` <a name="ResetActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig"></a>

```csharp
private void ResetActiveDirectoryConfig()
```

##### `ResetCertificateBasedAuthProperties` <a name="ResetCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties"></a>

```csharp
private void ResetCertificateBasedAuthProperties()
```

##### `ResetEnableSelfService` <a name="ResetEnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService"></a>

```csharp
private void ResetEnableSelfService()
```

##### `ResetEndpointEncryptionMode` <a name="ResetEndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode"></a>

```csharp
private void ResetEndpointEncryptionMode()
```

##### `ResetIdcInstanceArn` <a name="ResetIdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn"></a>

```csharp
private void ResetIdcInstanceArn()
```

##### `ResetIpGroupIds` <a name="ResetIpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```csharp
private void ResetIpGroupIds()
```

##### `ResetMicrosoftEntraConfig` <a name="ResetMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig"></a>

```csharp
private void ResetMicrosoftEntraConfig()
```

##### `ResetSamlProperties` <a name="ResetSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties"></a>

```csharp
private void ResetSamlProperties()
```

##### `ResetSelfservicePermissions` <a name="ResetSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions"></a>

```csharp
private void ResetSelfservicePermissions()
```

##### `ResetStreamingProperties` <a name="ResetStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties"></a>

```csharp
private void ResetStreamingProperties()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy"></a>

```csharp
private void ResetTenancy()
```

##### `ResetUserIdentityType` <a name="ResetUserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType"></a>

```csharp
private void ResetUserIdentityType()
```

##### `ResetWorkspaceAccessProperties` <a name="ResetWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```csharp
private void ResetWorkspaceAccessProperties()
```

##### `ResetWorkspaceCreationProperties` <a name="ResetWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```csharp
private void ResetWorkspaceCreationProperties()
```

##### `ResetWorkspaceDirectoryDescription` <a name="ResetWorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription"></a>

```csharp
private void ResetWorkspaceDirectoryDescription()
```

##### `ResetWorkspaceDirectoryName` <a name="ResetWorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName"></a>

```csharp
private void ResetWorkspaceDirectoryName()
```

##### `ResetWorkspaceType` <a name="ResetWorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType"></a>

```csharp
private void ResetWorkspaceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesDirectory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesDirectory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesDirectory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesDirectory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesDirectory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName">CustomerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType">DirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses">DnsIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">IamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig">IdcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig">MicrosoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode">RegistrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties">SamlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions">SelfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties">StreamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">WorkspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput">ActiveDirectoryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput">CertificateBasedAuthPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput">EnableSelfServiceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput">EndpointEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">IpGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput">MicrosoftEntraConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput">SamlPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput">SelfservicePermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput">StreamingPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput">UserIdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">WorkspaceAccessPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">WorkspaceCreationPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput">WorkspaceDirectoryDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput">WorkspaceDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput">WorkspaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService">EnableSelfService</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode">EndpointEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">IpGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType">UserIdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription">WorkspaceDirectoryDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName">WorkspaceDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType">WorkspaceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig"></a>

```csharp
public WorkspacesDirectoryActiveDirectoryConfigOutputReference ActiveDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateBasedAuthProperties`<sup>Required</sup> <a name="CertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```csharp
public WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference CertificateBasedAuthProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `CustomerUserName`<sup>Required</sup> <a name="CustomerUserName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```csharp
public string CustomerUserName { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```csharp
public string DirectoryType { get; }
```

- *Type:* string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```csharp
public string[] DnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `DnsIpv6Addresses`<sup>Required</sup> <a name="DnsIpv6Addresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses"></a>

```csharp
public string[] DnsIpv6Addresses { get; }
```

- *Type:* string[]

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```csharp
public string IamRoleId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcConfig`<sup>Required</sup> <a name="IdcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig"></a>

```csharp
public WorkspacesDirectoryIdcConfigOutputReference IdcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `MicrosoftEntraConfig`<sup>Required</sup> <a name="MicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig"></a>

```csharp
public WorkspacesDirectoryMicrosoftEntraConfigOutputReference MicrosoftEntraConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `RegistrationCode`<sup>Required</sup> <a name="RegistrationCode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```csharp
public string RegistrationCode { get; }
```

- *Type:* string

---

##### `SamlProperties`<sup>Required</sup> <a name="SamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties"></a>

```csharp
public WorkspacesDirectorySamlPropertiesOutputReference SamlProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `SelfservicePermissions`<sup>Required</sup> <a name="SelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions"></a>

```csharp
public WorkspacesDirectorySelfservicePermissionsOutputReference SelfservicePermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StreamingProperties`<sup>Required</sup> <a name="StreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties"></a>

```csharp
public WorkspacesDirectoryStreamingPropertiesOutputReference StreamingProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```csharp
public WorkspacesDirectoryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a>

---

##### `WorkspaceAccessProperties`<sup>Required</sup> <a name="WorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference WorkspaceAccessProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `WorkspaceCreationProperties`<sup>Required</sup> <a name="WorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference WorkspaceCreationProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `WorkspaceSecurityGroupId`<sup>Required</sup> <a name="WorkspaceSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```csharp
public string WorkspaceSecurityGroupId { get; }
```

- *Type:* string

---

##### `ActiveDirectoryConfigInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryActiveDirectoryConfig ActiveDirectoryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `CertificateBasedAuthPropertiesInput`<sup>Optional</sup> <a name="CertificateBasedAuthPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryCertificateBasedAuthProperties CertificateBasedAuthPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `EnableSelfServiceInput`<sup>Optional</sup> <a name="EnableSelfServiceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput"></a>

```csharp
public bool|IResolvable EnableSelfServiceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointEncryptionModeInput`<sup>Optional</sup> <a name="EndpointEncryptionModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput"></a>

```csharp
public string EndpointEncryptionModeInput { get; }
```

- *Type:* string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput"></a>

```csharp
public string IdcInstanceArnInput { get; }
```

- *Type:* string

---

##### `IpGroupIdsInput`<sup>Optional</sup> <a name="IpGroupIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```csharp
public string[] IpGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `MicrosoftEntraConfigInput`<sup>Optional</sup> <a name="MicrosoftEntraConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryMicrosoftEntraConfig MicrosoftEntraConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `SamlPropertiesInput`<sup>Optional</sup> <a name="SamlPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput"></a>

```csharp
public IResolvable|WorkspacesDirectorySamlProperties SamlPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `SelfservicePermissionsInput`<sup>Optional</sup> <a name="SelfservicePermissionsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput"></a>

```csharp
public IResolvable|WorkspacesDirectorySelfservicePermissions SelfservicePermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `StreamingPropertiesInput`<sup>Optional</sup> <a name="StreamingPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingProperties StreamingPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `UserIdentityTypeInput`<sup>Optional</sup> <a name="UserIdentityTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput"></a>

```csharp
public string UserIdentityTypeInput { get; }
```

- *Type:* string

---

##### `WorkspaceAccessPropertiesInput`<sup>Optional</sup> <a name="WorkspaceAccessPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessProperties WorkspaceAccessPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `WorkspaceCreationPropertiesInput`<sup>Optional</sup> <a name="WorkspaceCreationPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceCreationProperties WorkspaceCreationPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `WorkspaceDirectoryDescriptionInput`<sup>Optional</sup> <a name="WorkspaceDirectoryDescriptionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput"></a>

```csharp
public string WorkspaceDirectoryDescriptionInput { get; }
```

- *Type:* string

---

##### `WorkspaceDirectoryNameInput`<sup>Optional</sup> <a name="WorkspaceDirectoryNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput"></a>

```csharp
public string WorkspaceDirectoryNameInput { get; }
```

- *Type:* string

---

##### `WorkspaceTypeInput`<sup>Optional</sup> <a name="WorkspaceTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput"></a>

```csharp
public string WorkspaceTypeInput { get; }
```

- *Type:* string

---

##### `EnableSelfService`<sup>Required</sup> <a name="EnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService"></a>

```csharp
public bool|IResolvable EnableSelfService { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointEncryptionMode`<sup>Required</sup> <a name="EndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode"></a>

```csharp
public string EndpointEncryptionMode { get; }
```

- *Type:* string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `IpGroupIds`<sup>Required</sup> <a name="IpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```csharp
public string[] IpGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `UserIdentityType`<sup>Required</sup> <a name="UserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType"></a>

```csharp
public string UserIdentityType { get; }
```

- *Type:* string

---

##### `WorkspaceDirectoryDescription`<sup>Required</sup> <a name="WorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```csharp
public string WorkspaceDirectoryDescription { get; }
```

- *Type:* string

---

##### `WorkspaceDirectoryName`<sup>Required</sup> <a name="WorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName"></a>

```csharp
public string WorkspaceDirectoryName { get; }
```

- *Type:* string

---

##### `WorkspaceType`<sup>Required</sup> <a name="WorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType"></a>

```csharp
public string WorkspaceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryActiveDirectoryConfig <a name="WorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryActiveDirectoryConfig {
    string DomainName = null,
    string ServiceAccountSecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName">DomainName</a></code> | <code>string</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn">ServiceAccountSecretArn</a></code> | <code>string</code> | Indicates the secret ARN on the service account. |

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}

---

##### `ServiceAccountSecretArn`<sup>Optional</sup> <a name="ServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn"></a>

```csharp
public string ServiceAccountSecretArn { get; set; }
```

- *Type:* string

Indicates the secret ARN on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}

---

### WorkspacesDirectoryCertificateBasedAuthProperties <a name="WorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryCertificateBasedAuthProperties {
    string CertificateAuthorityArn = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status">Status</a></code> | <code>string</code> | The status of the certificate-based authentication properties. |

---

##### `CertificateAuthorityArn`<sup>Optional</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the certificate-based authentication properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    WorkspacesDirectoryActiveDirectoryConfig ActiveDirectoryConfig = null,
    WorkspacesDirectoryCertificateBasedAuthProperties CertificateBasedAuthProperties = null,
    bool|IResolvable EnableSelfService = null,
    string EndpointEncryptionMode = null,
    string IdcInstanceArn = null,
    string[] IpGroupIds = null,
    WorkspacesDirectoryMicrosoftEntraConfig MicrosoftEntraConfig = null,
    WorkspacesDirectorySamlProperties SamlProperties = null,
    WorkspacesDirectorySelfservicePermissions SelfservicePermissions = null,
    WorkspacesDirectoryStreamingProperties StreamingProperties = null,
    string[] SubnetIds = null,
    IResolvable|WorkspacesDirectoryTags[] Tags = null,
    string Tenancy = null,
    string UserIdentityType = null,
    WorkspacesDirectoryWorkspaceAccessProperties WorkspaceAccessProperties = null,
    WorkspacesDirectoryWorkspaceCreationProperties WorkspaceCreationProperties = null,
    string WorkspaceDirectoryDescription = null,
    string WorkspaceDirectoryName = null,
    string WorkspaceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | Information about the Active Directory config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService">EnableSelfService</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether self-service capabilities are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode">EndpointEncryptionMode</a></code> | <code>string</code> | Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the identity center instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">IpGroupIds</a></code> | <code>string[]</code> | The identifiers of the IP access control groups associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig">MicrosoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | Specifies the configurations of the Microsoft Entra. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties">SamlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions">SelfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | Describes the self-service permissions for a directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties">StreamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | Describes the streaming properties. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The identifiers of the subnets for your virtual private cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]</code> | The tags associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy">Tenancy</a></code> | <code>string</code> | Indicates whether your WorkSpace directory is dedicated or shared. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType">UserIdentityType</a></code> | <code>string</code> | The type of identity management the user is using. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | The device types and operating systems that can be used to access a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | The default values that are used to create WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription">WorkspaceDirectoryDescription</a></code> | <code>string</code> | Description of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName">WorkspaceDirectoryName</a></code> | <code>string</code> | The name of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType">WorkspaceType</a></code> | <code>string</code> | Indicates whether the directory's WorkSpace type is personal or pools. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActiveDirectoryConfig`<sup>Optional</sup> <a name="ActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig"></a>

```csharp
public WorkspacesDirectoryActiveDirectoryConfig ActiveDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

Information about the Active Directory config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `CertificateBasedAuthProperties`<sup>Optional</sup> <a name="CertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties"></a>

```csharp
public WorkspacesDirectoryCertificateBasedAuthProperties CertificateBasedAuthProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `EnableSelfService`<sup>Optional</sup> <a name="EnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService"></a>

```csharp
public bool|IResolvable EnableSelfService { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether self-service capabilities are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_self_service WorkspacesDirectory#enable_self_service}

---

##### `EndpointEncryptionMode`<sup>Optional</sup> <a name="EndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode"></a>

```csharp
public string EndpointEncryptionMode { get; set; }
```

- *Type:* string

Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#endpoint_encryption_mode WorkspacesDirectory#endpoint_encryption_mode}

---

##### `IdcInstanceArn`<sup>Optional</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the identity center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#idc_instance_arn WorkspacesDirectory#idc_instance_arn}

---

##### `IpGroupIds`<sup>Optional</sup> <a name="IpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```csharp
public string[] IpGroupIds { get; set; }
```

- *Type:* string[]

The identifiers of the IP access control groups associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}

---

##### `MicrosoftEntraConfig`<sup>Optional</sup> <a name="MicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig"></a>

```csharp
public WorkspacesDirectoryMicrosoftEntraConfig MicrosoftEntraConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

Specifies the configurations of the Microsoft Entra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#microsoft_entra_config WorkspacesDirectory#microsoft_entra_config}

---

##### `SamlProperties`<sup>Optional</sup> <a name="SamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties"></a>

```csharp
public WorkspacesDirectorySamlProperties SamlProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `SelfservicePermissions`<sup>Optional</sup> <a name="SelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions"></a>

```csharp
public WorkspacesDirectorySelfservicePermissions SelfservicePermissions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

Describes the self-service permissions for a directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#selfservice_permissions WorkspacesDirectory#selfservice_permissions}

---

##### `StreamingProperties`<sup>Optional</sup> <a name="StreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties"></a>

```csharp
public WorkspacesDirectoryStreamingProperties StreamingProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

Describes the streaming properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_properties WorkspacesDirectory#streaming_properties}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The identifiers of the subnets for your virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```csharp
public IResolvable|WorkspacesDirectoryTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

The tags associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Indicates whether your WorkSpace directory is dedicated or shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenancy WorkspacesDirectory#tenancy}

---

##### `UserIdentityType`<sup>Optional</sup> <a name="UserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType"></a>

```csharp
public string UserIdentityType { get; set; }
```

- *Type:* string

The type of identity management the user is using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}

---

##### `WorkspaceAccessProperties`<sup>Optional</sup> <a name="WorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessProperties WorkspaceAccessProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

The device types and operating systems that can be used to access a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `WorkspaceCreationProperties`<sup>Optional</sup> <a name="WorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceCreationProperties WorkspaceCreationProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

The default values that are used to create WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `WorkspaceDirectoryDescription`<sup>Optional</sup> <a name="WorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription"></a>

```csharp
public string WorkspaceDirectoryDescription { get; set; }
```

- *Type:* string

Description of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}

---

##### `WorkspaceDirectoryName`<sup>Optional</sup> <a name="WorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName"></a>

```csharp
public string WorkspaceDirectoryName { get; set; }
```

- *Type:* string

The name of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}

---

##### `WorkspaceType`<sup>Optional</sup> <a name="WorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType"></a>

```csharp
public string WorkspaceType { get; set; }
```

- *Type:* string

Indicates whether the directory's WorkSpace type is personal or pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}

---

### WorkspacesDirectoryIdcConfig <a name="WorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryIdcConfig {

};
```


### WorkspacesDirectoryMicrosoftEntraConfig <a name="WorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryMicrosoftEntraConfig {
    string ApplicationConfigSecretArn = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn">ApplicationConfigSecretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the application config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The identifier of the tenant. |

---

##### `ApplicationConfigSecretArn`<sup>Optional</sup> <a name="ApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn"></a>

```csharp
public string ApplicationConfigSecretArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the application config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#application_config_secret_arn WorkspacesDirectory#application_config_secret_arn}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The identifier of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenant_id WorkspacesDirectory#tenant_id}

---

### WorkspacesDirectorySamlProperties <a name="WorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectorySamlProperties {
    string RelayStateParameterName = null,
    string Status = null,
    string UserAccessUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName">RelayStateParameterName</a></code> | <code>string</code> | The relay state parameter name supported by the SAML 2.0 identity provider (IdP). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status">Status</a></code> | <code>string</code> | Indicates the status of SAML 2.0 authentication. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl">UserAccessUrl</a></code> | <code>string</code> | The SAML 2.0 identity provider (IdP) user access URL. |

---

##### `RelayStateParameterName`<sup>Optional</sup> <a name="RelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName"></a>

```csharp
public string RelayStateParameterName { get; set; }
```

- *Type:* string

The relay state parameter name supported by the SAML 2.0 identity provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Indicates the status of SAML 2.0 authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

##### `UserAccessUrl`<sup>Optional</sup> <a name="UserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl"></a>

```csharp
public string UserAccessUrl { get; set; }
```

- *Type:* string

The SAML 2.0 identity provider (IdP) user access URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}

---

### WorkspacesDirectorySelfservicePermissions <a name="WorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectorySelfservicePermissions {
    string ChangeComputeType = null,
    string IncreaseVolumeSize = null,
    string RebuildWorkspace = null,
    string RestartWorkspace = null,
    string SwitchRunningMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType">ChangeComputeType</a></code> | <code>string</code> | Specifies whether users can change the compute type (bundle) for their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>string</code> | Specifies whether users can increase the volume size of the drives on their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>string</code> | Specifies whether users can rebuild the operating system of a WorkSpace to its original state. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace">RestartWorkspace</a></code> | <code>string</code> | Specifies whether users can restart their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode">SwitchRunningMode</a></code> | <code>string</code> | Specifies whether users can switch the running mode of their WorkSpace. |

---

##### `ChangeComputeType`<sup>Optional</sup> <a name="ChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType"></a>

```csharp
public string ChangeComputeType { get; set; }
```

- *Type:* string

Specifies whether users can change the compute type (bundle) for their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}

---

##### `IncreaseVolumeSize`<sup>Optional</sup> <a name="IncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize"></a>

```csharp
public string IncreaseVolumeSize { get; set; }
```

- *Type:* string

Specifies whether users can increase the volume size of the drives on their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}

---

##### `RebuildWorkspace`<sup>Optional</sup> <a name="RebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace"></a>

```csharp
public string RebuildWorkspace { get; set; }
```

- *Type:* string

Specifies whether users can rebuild the operating system of a WorkSpace to its original state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}

---

##### `RestartWorkspace`<sup>Optional</sup> <a name="RestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace"></a>

```csharp
public string RestartWorkspace { get; set; }
```

- *Type:* string

Specifies whether users can restart their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}

---

##### `SwitchRunningMode`<sup>Optional</sup> <a name="SwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode"></a>

```csharp
public string SwitchRunningMode { get; set; }
```

- *Type:* string

Specifies whether users can switch the running mode of their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}

---

### WorkspacesDirectoryStreamingProperties <a name="WorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingProperties {
    WorkspacesDirectoryStreamingPropertiesGlobalAccelerator GlobalAccelerator = null,
    IResolvable|WorkspacesDirectoryStreamingPropertiesStorageConnectors[] StorageConnectors = null,
    string StreamingExperiencePreferredProtocol = null,
    IResolvable|WorkspacesDirectoryStreamingPropertiesUserSettings[] UserSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator">GlobalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | Describes the Global Accelerator for directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors">StorageConnectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]</code> | Indicates the storage connector used. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol">StreamingExperiencePreferredProtocol</a></code> | <code>string</code> | Indicates the type of preferred protocol for the streaming experience. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings">UserSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]</code> | Indicates the permission settings associated with the user. |

---

##### `GlobalAccelerator`<sup>Optional</sup> <a name="GlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator"></a>

```csharp
public WorkspacesDirectoryStreamingPropertiesGlobalAccelerator GlobalAccelerator { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

Describes the Global Accelerator for directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#global_accelerator WorkspacesDirectory#global_accelerator}

---

##### `StorageConnectors`<sup>Optional</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesStorageConnectors[] StorageConnectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

Indicates the storage connector used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#storage_connectors WorkspacesDirectory#storage_connectors}

---

##### `StreamingExperiencePreferredProtocol`<sup>Optional</sup> <a name="StreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol"></a>

```csharp
public string StreamingExperiencePreferredProtocol { get; set; }
```

- *Type:* string

Indicates the type of preferred protocol for the streaming experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_experience_preferred_protocol WorkspacesDirectory#streaming_experience_preferred_protocol}

---

##### `UserSettings`<sup>Optional</sup> <a name="UserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesUserSettings[] UserSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

Indicates the permission settings associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_settings WorkspacesDirectory#user_settings}

---

### WorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="WorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesGlobalAccelerator {
    string Mode = null,
    string PreferredProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode">Mode</a></code> | <code>string</code> | Indicates if Global Accelerator for directory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol">PreferredProtocol</a></code> | <code>string</code> | Indicates the preferred protocol for Global Accelerator. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Indicates if Global Accelerator for directory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#mode WorkspacesDirectory#mode}

---

##### `PreferredProtocol`<sup>Optional</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol"></a>

```csharp
public string PreferredProtocol { get; set; }
```

- *Type:* string

Indicates the preferred protocol for Global Accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#preferred_protocol WorkspacesDirectory#preferred_protocol}

---

### WorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesStorageConnectors {
    string ConnectorType = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType">ConnectorType</a></code> | <code>string</code> | The type of connector used to save user files. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status">Status</a></code> | <code>string</code> | Indicates if the storage connector is enabled or disabled. |

---

##### `ConnectorType`<sup>Optional</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType"></a>

```csharp
public string ConnectorType { get; set; }
```

- *Type:* string

The type of connector used to save user files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#connector_type WorkspacesDirectory#connector_type}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Indicates if the storage connector is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryStreamingPropertiesUserSettings <a name="WorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesUserSettings {
    string Action = null,
    double MaximumLength = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action">Action</a></code> | <code>string</code> | Indicates the type of action. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength">MaximumLength</a></code> | <code>double</code> | Indicates the maximum character length for the specified user setting. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission">Permission</a></code> | <code>string</code> | Indicates if the setting is enabled or disabled. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Indicates the type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#action WorkspacesDirectory#action}

---

##### `MaximumLength`<sup>Optional</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength"></a>

```csharp
public double MaximumLength { get; set; }
```

- *Type:* double

Indicates the maximum character length for the specified user setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#maximum_length WorkspacesDirectory#maximum_length}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Indicates if the setting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#permission WorkspacesDirectory#permission}

---

### WorkspacesDirectoryTags <a name="WorkspacesDirectoryTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#key WorkspacesDirectory#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#value WorkspacesDirectory#value}

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceAccessProperties {
    WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig AccessEndpointConfig = null,
    string DeviceTypeAndroid = null,
    string DeviceTypeChromeOs = null,
    string DeviceTypeIos = null,
    string DeviceTypeLinux = null,
    string DeviceTypeOsx = null,
    string DeviceTypeWeb = null,
    string DeviceTypeWindows = null,
    string DeviceTypeWorkSpacesThinClient = null,
    string DeviceTypeZeroClient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig">AccessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | Describes the access endpoint configuration for a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>string</code> | Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs">DeviceTypeChromeOs</a></code> | <code>string</code> | Indicates whether users can use Chromebooks to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>string</code> | Indicates whether users can use iOS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>string</code> | Indicates whether users can use Linux clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>string</code> | Indicates whether users can use macOS clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>string</code> | Indicates whether users can access their WorkSpaces through a web browser. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>string</code> | Indicates whether users can use Windows clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient">DeviceTypeWorkSpacesThinClient</a></code> | <code>string</code> | Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient">DeviceTypeZeroClient</a></code> | <code>string</code> | Indicates whether users can use zero client devices to access their WorkSpaces. |

---

##### `AccessEndpointConfig`<sup>Optional</sup> <a name="AccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig AccessEndpointConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

Describes the access endpoint configuration for a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_config WorkspacesDirectory#access_endpoint_config}

---

##### `DeviceTypeAndroid`<sup>Optional</sup> <a name="DeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```csharp
public string DeviceTypeAndroid { get; set; }
```

- *Type:* string

Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}

---

##### `DeviceTypeChromeOs`<sup>Optional</sup> <a name="DeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs"></a>

```csharp
public string DeviceTypeChromeOs { get; set; }
```

- *Type:* string

Indicates whether users can use Chromebooks to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_chrome_os WorkspacesDirectory#device_type_chrome_os}

---

##### `DeviceTypeIos`<sup>Optional</sup> <a name="DeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```csharp
public string DeviceTypeIos { get; set; }
```

- *Type:* string

Indicates whether users can use iOS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}

---

##### `DeviceTypeLinux`<sup>Optional</sup> <a name="DeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```csharp
public string DeviceTypeLinux { get; set; }
```

- *Type:* string

Indicates whether users can use Linux clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}

---

##### `DeviceTypeOsx`<sup>Optional</sup> <a name="DeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```csharp
public string DeviceTypeOsx { get; set; }
```

- *Type:* string

Indicates whether users can use macOS clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}

---

##### `DeviceTypeWeb`<sup>Optional</sup> <a name="DeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```csharp
public string DeviceTypeWeb { get; set; }
```

- *Type:* string

Indicates whether users can access their WorkSpaces through a web browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}

---

##### `DeviceTypeWindows`<sup>Optional</sup> <a name="DeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```csharp
public string DeviceTypeWindows { get; set; }
```

- *Type:* string

Indicates whether users can use Windows clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}

---

##### `DeviceTypeWorkSpacesThinClient`<sup>Optional</sup> <a name="DeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient"></a>

```csharp
public string DeviceTypeWorkSpacesThinClient { get; set; }
```

- *Type:* string

Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_work_spaces_thin_client WorkspacesDirectory#device_type_work_spaces_thin_client}

---

##### `DeviceTypeZeroClient`<sup>Optional</sup> <a name="DeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient"></a>

```csharp
public string DeviceTypeZeroClient { get; set; }
```

- *Type:* string

Indicates whether users can use zero client devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_zero_client WorkspacesDirectory#device_type_zero_client}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig {
    IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[] AccessEndpoints = null,
    string[] InternetFallbackProtocols = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints">AccessEndpoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]</code> | Indicates a list of access endpoints associated with this directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols">InternetFallbackProtocols</a></code> | <code>string[]</code> | Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available. |

---

##### `AccessEndpoints`<sup>Optional</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[] AccessEndpoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

Indicates a list of access endpoints associated with this directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoints WorkspacesDirectory#access_endpoints}

---

##### `InternetFallbackProtocols`<sup>Optional</sup> <a name="InternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols"></a>

```csharp
public string[] InternetFallbackProtocols { get; set; }
```

- *Type:* string[]

Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#internet_fallback_protocols WorkspacesDirectory#internet_fallback_protocols}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints {
    string AccessEndpointType = null,
    string VpcEndpointId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType">AccessEndpointType</a></code> | <code>string</code> | Indicates the type of access endpoint. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Indicates the VPC endpoint to use for access. |

---

##### `AccessEndpointType`<sup>Optional</sup> <a name="AccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType"></a>

```csharp
public string AccessEndpointType { get; set; }
```

- *Type:* string

Indicates the type of access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_type WorkspacesDirectory#access_endpoint_type}

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Indicates the VPC endpoint to use for access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#vpc_endpoint_id WorkspacesDirectory#vpc_endpoint_id}

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceCreationProperties {
    string CustomSecurityGroupId = null,
    string DefaultOu = null,
    bool|IResolvable EnableInternetAccess = null,
    bool|IResolvable EnableMaintenanceMode = null,
    string InstanceIamRoleArn = null,
    bool|IResolvable UserEnabledAsLocalAdministrator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>string</code> | The identifier of the default security group to apply to WorkSpaces when they are created. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">DefaultOu</a></code> | <code>string</code> | The organizational unit (OU) in the directory for the WorkSpace machine accounts. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether maintenance mode is enabled for WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn">InstanceIamRoleArn</a></code> | <code>string</code> | Indicates the IAM role ARN of the instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether WorkSpace users are local administrators on their WorkSpaces. |

---

##### `CustomSecurityGroupId`<sup>Optional</sup> <a name="CustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```csharp
public string CustomSecurityGroupId { get; set; }
```

- *Type:* string

The identifier of the default security group to apply to WorkSpaces when they are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}

---

##### `DefaultOu`<sup>Optional</sup> <a name="DefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```csharp
public string DefaultOu { get; set; }
```

- *Type:* string

The organizational unit (OU) in the directory for the WorkSpace machine accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```csharp
public bool|IResolvable EnableInternetAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}

---

##### `EnableMaintenanceMode`<sup>Optional</sup> <a name="EnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```csharp
public bool|IResolvable EnableMaintenanceMode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether maintenance mode is enabled for WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}

---

##### `InstanceIamRoleArn`<sup>Optional</sup> <a name="InstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn"></a>

```csharp
public string InstanceIamRoleArn { get; set; }
```

- *Type:* string

Indicates the IAM role ARN of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#instance_iam_role_arn WorkspacesDirectory#instance_iam_role_arn}

---

##### `UserEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```csharp
public bool|IResolvable UserEnabledAsLocalAdministrator { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether WorkSpace users are local administrators on their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="WorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryActiveDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn">ResetServiceAccountSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetServiceAccountSecretArn` <a name="ResetServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn"></a>

```csharp
private void ResetServiceAccountSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput">ServiceAccountSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">ServiceAccountSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `ServiceAccountSecretArnInput`<sup>Optional</sup> <a name="ServiceAccountSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput"></a>

```csharp
public string ServiceAccountSecretArnInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `ServiceAccountSecretArn`<sup>Required</sup> <a name="ServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```csharp
public string ServiceAccountSecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryActiveDirectoryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---


### WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">ResetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityArn` <a name="ResetCertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```csharp
private void ResetCertificateAuthorityArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```csharp
public string CertificateAuthorityArnInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryCertificateBasedAuthProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### WorkspacesDirectoryIdcConfigOutputReference <a name="WorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryIdcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```csharp
public WorkspacesDirectoryIdcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a>

---


### WorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="WorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryMicrosoftEntraConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn">ResetApplicationConfigSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationConfigSecretArn` <a name="ResetApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn"></a>

```csharp
private void ResetApplicationConfigSecretArn()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput">ApplicationConfigSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">ApplicationConfigSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationConfigSecretArnInput`<sup>Optional</sup> <a name="ApplicationConfigSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput"></a>

```csharp
public string ApplicationConfigSecretArnInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ApplicationConfigSecretArn`<sup>Required</sup> <a name="ApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```csharp
public string ApplicationConfigSecretArn { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryMicrosoftEntraConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---


### WorkspacesDirectorySamlPropertiesOutputReference <a name="WorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectorySamlPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName">ResetRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl">ResetUserAccessUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelayStateParameterName` <a name="ResetRelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName"></a>

```csharp
private void ResetRelayStateParameterName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUserAccessUrl` <a name="ResetUserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl"></a>

```csharp
private void ResetUserAccessUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput">RelayStateParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput">UserAccessUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">RelayStateParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">UserAccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelayStateParameterNameInput`<sup>Optional</sup> <a name="RelayStateParameterNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput"></a>

```csharp
public string RelayStateParameterNameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UserAccessUrlInput`<sup>Optional</sup> <a name="UserAccessUrlInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput"></a>

```csharp
public string UserAccessUrlInput { get; }
```

- *Type:* string

---

##### `RelayStateParameterName`<sup>Required</sup> <a name="RelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```csharp
public string RelayStateParameterName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserAccessUrl`<sup>Required</sup> <a name="UserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```csharp
public string UserAccessUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectorySamlProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---


### WorkspacesDirectorySelfservicePermissionsOutputReference <a name="WorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectorySelfservicePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType">ResetChangeComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize">ResetIncreaseVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace">ResetRebuildWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace">ResetRestartWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode">ResetSwitchRunningMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeComputeType` <a name="ResetChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType"></a>

```csharp
private void ResetChangeComputeType()
```

##### `ResetIncreaseVolumeSize` <a name="ResetIncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```csharp
private void ResetIncreaseVolumeSize()
```

##### `ResetRebuildWorkspace` <a name="ResetRebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace"></a>

```csharp
private void ResetRebuildWorkspace()
```

##### `ResetRestartWorkspace` <a name="ResetRestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace"></a>

```csharp
private void ResetRestartWorkspace()
```

##### `ResetSwitchRunningMode` <a name="ResetSwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode"></a>

```csharp
private void ResetSwitchRunningMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput">ChangeComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput">IncreaseVolumeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput">RebuildWorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput">RestartWorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput">SwitchRunningModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">ChangeComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">RestartWorkspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">SwitchRunningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeComputeTypeInput`<sup>Optional</sup> <a name="ChangeComputeTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```csharp
public string ChangeComputeTypeInput { get; }
```

- *Type:* string

---

##### `IncreaseVolumeSizeInput`<sup>Optional</sup> <a name="IncreaseVolumeSizeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```csharp
public string IncreaseVolumeSizeInput { get; }
```

- *Type:* string

---

##### `RebuildWorkspaceInput`<sup>Optional</sup> <a name="RebuildWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```csharp
public string RebuildWorkspaceInput { get; }
```

- *Type:* string

---

##### `RestartWorkspaceInput`<sup>Optional</sup> <a name="RestartWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```csharp
public string RestartWorkspaceInput { get; }
```

- *Type:* string

---

##### `SwitchRunningModeInput`<sup>Optional</sup> <a name="SwitchRunningModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput"></a>

```csharp
public string SwitchRunningModeInput { get; }
```

- *Type:* string

---

##### `ChangeComputeType`<sup>Required</sup> <a name="ChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```csharp
public string ChangeComputeType { get; }
```

- *Type:* string

---

##### `IncreaseVolumeSize`<sup>Required</sup> <a name="IncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```csharp
public string IncreaseVolumeSize { get; }
```

- *Type:* string

---

##### `RebuildWorkspace`<sup>Required</sup> <a name="RebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```csharp
public string RebuildWorkspace { get; }
```

- *Type:* string

---

##### `RestartWorkspace`<sup>Required</sup> <a name="RestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```csharp
public string RestartWorkspace { get; }
```

- *Type:* string

---

##### `SwitchRunningMode`<sup>Required</sup> <a name="SwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```csharp
public string SwitchRunningMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectorySelfservicePermissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---


### WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol">ResetPreferredProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetPreferredProtocol` <a name="ResetPreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol"></a>

```csharp
private void ResetPreferredProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput">PreferredProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">PreferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `PreferredProtocolInput`<sup>Optional</sup> <a name="PreferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput"></a>

```csharp
public string PreferredProtocolInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `PreferredProtocol`<sup>Required</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```csharp
public string PreferredProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesGlobalAccelerator InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---


### WorkspacesDirectoryStreamingPropertiesOutputReference <a name="WorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator">PutGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors">PutStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings">PutUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator">ResetGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors">ResetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol">ResetStreamingExperiencePreferredProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings">ResetUserSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlobalAccelerator` <a name="PutGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator"></a>

```csharp
private void PutGlobalAccelerator(WorkspacesDirectoryStreamingPropertiesGlobalAccelerator Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `PutStorageConnectors` <a name="PutStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors"></a>

```csharp
private void PutStorageConnectors(IResolvable|WorkspacesDirectoryStreamingPropertiesStorageConnectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

---

##### `PutUserSettings` <a name="PutUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings"></a>

```csharp
private void PutUserSettings(IResolvable|WorkspacesDirectoryStreamingPropertiesUserSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

---

##### `ResetGlobalAccelerator` <a name="ResetGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator"></a>

```csharp
private void ResetGlobalAccelerator()
```

##### `ResetStorageConnectors` <a name="ResetStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors"></a>

```csharp
private void ResetStorageConnectors()
```

##### `ResetStreamingExperiencePreferredProtocol` <a name="ResetStreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol"></a>

```csharp
private void ResetStreamingExperiencePreferredProtocol()
```

##### `ResetUserSettings` <a name="ResetUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings"></a>

```csharp
private void ResetUserSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">GlobalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">StorageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput">GlobalAcceleratorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput">StorageConnectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput">StreamingExperiencePreferredProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput">UserSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">StreamingExperiencePreferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlobalAccelerator`<sup>Required</sup> <a name="GlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```csharp
public WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference GlobalAccelerator { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `StorageConnectors`<sup>Required</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```csharp
public WorkspacesDirectoryStreamingPropertiesStorageConnectorsList StorageConnectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `UserSettings`<sup>Required</sup> <a name="UserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```csharp
public WorkspacesDirectoryStreamingPropertiesUserSettingsList UserSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `GlobalAcceleratorInput`<sup>Optional</sup> <a name="GlobalAcceleratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesGlobalAccelerator GlobalAcceleratorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `StorageConnectorsInput`<sup>Optional</sup> <a name="StorageConnectorsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesStorageConnectors[] StorageConnectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

---

##### `StreamingExperiencePreferredProtocolInput`<sup>Optional</sup> <a name="StreamingExperiencePreferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput"></a>

```csharp
public string StreamingExperiencePreferredProtocolInput { get; }
```

- *Type:* string

---

##### `UserSettingsInput`<sup>Optional</sup> <a name="UserSettingsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesUserSettings[] UserSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

---

##### `StreamingExperiencePreferredProtocol`<sup>Required</sup> <a name="StreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```csharp
public string StreamingExperiencePreferredProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesStorageConnectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```csharp
private WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesStorageConnectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType">ResetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectorType` <a name="ResetConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType"></a>

```csharp
private void ResetConnectorType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```csharp
public string ConnectorTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesStorageConnectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesUserSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```csharp
private WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesUserSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength">ResetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetMaximumLength` <a name="ResetMaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength"></a>

```csharp
private void ResetMaximumLength()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput">MaximumLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">MaximumLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `MaximumLengthInput`<sup>Optional</sup> <a name="MaximumLengthInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput"></a>

```csharp
public double MaximumLengthInput { get; }
```

- *Type:* double

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `MaximumLength`<sup>Required</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```csharp
public double MaximumLength { get; }
```

- *Type:* double

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryStreamingPropertiesUserSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>

---


### WorkspacesDirectoryTagsList <a name="WorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get"></a>

```csharp
private WorkspacesDirectoryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

---


### WorkspacesDirectoryTagsOutputReference <a name="WorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```csharp
private WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType">ResetAccessEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessEndpointType` <a name="ResetAccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType"></a>

```csharp
private void ResetAccessEndpointType()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId"></a>

```csharp
private void ResetVpcEndpointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput">AccessEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">AccessEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessEndpointTypeInput`<sup>Optional</sup> <a name="AccessEndpointTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput"></a>

```csharp
public string AccessEndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `AccessEndpointType`<sup>Required</sup> <a name="AccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```csharp
public string AccessEndpointType { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints">PutAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints">ResetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols">ResetInternetFallbackProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessEndpoints` <a name="PutAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints"></a>

```csharp
private void PutAccessEndpoints(IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

---

##### `ResetAccessEndpoints` <a name="ResetAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints"></a>

```csharp
private void ResetAccessEndpoints()
```

##### `ResetInternetFallbackProtocols` <a name="ResetInternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols"></a>

```csharp
private void ResetInternetFallbackProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput">AccessEndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput">InternetFallbackProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">InternetFallbackProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList AccessEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `AccessEndpointsInput`<sup>Optional</sup> <a name="AccessEndpointsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[] AccessEndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

---

##### `InternetFallbackProtocolsInput`<sup>Optional</sup> <a name="InternetFallbackProtocolsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput"></a>

```csharp
public string[] InternetFallbackProtocolsInput { get; }
```

- *Type:* string[]

---

##### `InternetFallbackProtocols`<sup>Required</sup> <a name="InternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```csharp
public string[] InternetFallbackProtocols { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig">PutAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig">ResetAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">ResetDeviceTypeAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs">ResetDeviceTypeChromeOs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">ResetDeviceTypeIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">ResetDeviceTypeLinux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">ResetDeviceTypeOsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">ResetDeviceTypeWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">ResetDeviceTypeWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient">ResetDeviceTypeWorkSpacesThinClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient">ResetDeviceTypeZeroClient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessEndpointConfig` <a name="PutAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig"></a>

```csharp
private void PutAccessEndpointConfig(WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `ResetAccessEndpointConfig` <a name="ResetAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig"></a>

```csharp
private void ResetAccessEndpointConfig()
```

##### `ResetDeviceTypeAndroid` <a name="ResetDeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```csharp
private void ResetDeviceTypeAndroid()
```

##### `ResetDeviceTypeChromeOs` <a name="ResetDeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs"></a>

```csharp
private void ResetDeviceTypeChromeOs()
```

##### `ResetDeviceTypeIos` <a name="ResetDeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```csharp
private void ResetDeviceTypeIos()
```

##### `ResetDeviceTypeLinux` <a name="ResetDeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```csharp
private void ResetDeviceTypeLinux()
```

##### `ResetDeviceTypeOsx` <a name="ResetDeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```csharp
private void ResetDeviceTypeOsx()
```

##### `ResetDeviceTypeWeb` <a name="ResetDeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```csharp
private void ResetDeviceTypeWeb()
```

##### `ResetDeviceTypeWindows` <a name="ResetDeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```csharp
private void ResetDeviceTypeWindows()
```

##### `ResetDeviceTypeWorkSpacesThinClient` <a name="ResetDeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient"></a>

```csharp
private void ResetDeviceTypeWorkSpacesThinClient()
```

##### `ResetDeviceTypeZeroClient` <a name="ResetDeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient"></a>

```csharp
private void ResetDeviceTypeZeroClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">AccessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput">AccessEndpointConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">DeviceTypeAndroidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput">DeviceTypeChromeOsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">DeviceTypeIosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">DeviceTypeLinuxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">DeviceTypeOsxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">DeviceTypeWebInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">DeviceTypeWindowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput">DeviceTypeWorkSpacesThinClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput">DeviceTypeZeroClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">DeviceTypeChromeOs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">DeviceTypeWorkSpacesThinClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">DeviceTypeZeroClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessEndpointConfig`<sup>Required</sup> <a name="AccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference AccessEndpointConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `AccessEndpointConfigInput`<sup>Optional</sup> <a name="AccessEndpointConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig AccessEndpointConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `DeviceTypeAndroidInput`<sup>Optional</sup> <a name="DeviceTypeAndroidInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```csharp
public string DeviceTypeAndroidInput { get; }
```

- *Type:* string

---

##### `DeviceTypeChromeOsInput`<sup>Optional</sup> <a name="DeviceTypeChromeOsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput"></a>

```csharp
public string DeviceTypeChromeOsInput { get; }
```

- *Type:* string

---

##### `DeviceTypeIosInput`<sup>Optional</sup> <a name="DeviceTypeIosInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```csharp
public string DeviceTypeIosInput { get; }
```

- *Type:* string

---

##### `DeviceTypeLinuxInput`<sup>Optional</sup> <a name="DeviceTypeLinuxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```csharp
public string DeviceTypeLinuxInput { get; }
```

- *Type:* string

---

##### `DeviceTypeOsxInput`<sup>Optional</sup> <a name="DeviceTypeOsxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```csharp
public string DeviceTypeOsxInput { get; }
```

- *Type:* string

---

##### `DeviceTypeWebInput`<sup>Optional</sup> <a name="DeviceTypeWebInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```csharp
public string DeviceTypeWebInput { get; }
```

- *Type:* string

---

##### `DeviceTypeWindowsInput`<sup>Optional</sup> <a name="DeviceTypeWindowsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```csharp
public string DeviceTypeWindowsInput { get; }
```

- *Type:* string

---

##### `DeviceTypeWorkSpacesThinClientInput`<sup>Optional</sup> <a name="DeviceTypeWorkSpacesThinClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput"></a>

```csharp
public string DeviceTypeWorkSpacesThinClientInput { get; }
```

- *Type:* string

---

##### `DeviceTypeZeroClientInput`<sup>Optional</sup> <a name="DeviceTypeZeroClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput"></a>

```csharp
public string DeviceTypeZeroClientInput { get; }
```

- *Type:* string

---

##### `DeviceTypeAndroid`<sup>Required</sup> <a name="DeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```csharp
public string DeviceTypeAndroid { get; }
```

- *Type:* string

---

##### `DeviceTypeChromeOs`<sup>Required</sup> <a name="DeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```csharp
public string DeviceTypeChromeOs { get; }
```

- *Type:* string

---

##### `DeviceTypeIos`<sup>Required</sup> <a name="DeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```csharp
public string DeviceTypeIos { get; }
```

- *Type:* string

---

##### `DeviceTypeLinux`<sup>Required</sup> <a name="DeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```csharp
public string DeviceTypeLinux { get; }
```

- *Type:* string

---

##### `DeviceTypeOsx`<sup>Required</sup> <a name="DeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```csharp
public string DeviceTypeOsx { get; }
```

- *Type:* string

---

##### `DeviceTypeWeb`<sup>Required</sup> <a name="DeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```csharp
public string DeviceTypeWeb { get; }
```

- *Type:* string

---

##### `DeviceTypeWindows`<sup>Required</sup> <a name="DeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```csharp
public string DeviceTypeWindows { get; }
```

- *Type:* string

---

##### `DeviceTypeWorkSpacesThinClient`<sup>Required</sup> <a name="DeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```csharp
public string DeviceTypeWorkSpacesThinClient { get; }
```

- *Type:* string

---

##### `DeviceTypeZeroClient`<sup>Required</sup> <a name="DeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```csharp
public string DeviceTypeZeroClient { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceAccessProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">ResetCustomSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">ResetDefaultOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">ResetEnableMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn">ResetInstanceIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">ResetUserEnabledAsLocalAdministrator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSecurityGroupId` <a name="ResetCustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```csharp
private void ResetCustomSecurityGroupId()
```

##### `ResetDefaultOu` <a name="ResetDefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```csharp
private void ResetDefaultOu()
```

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```csharp
private void ResetEnableInternetAccess()
```

##### `ResetEnableMaintenanceMode` <a name="ResetEnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```csharp
private void ResetEnableMaintenanceMode()
```

##### `ResetInstanceIamRoleArn` <a name="ResetInstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn"></a>

```csharp
private void ResetInstanceIamRoleArn()
```

##### `ResetUserEnabledAsLocalAdministrator` <a name="ResetUserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```csharp
private void ResetUserEnabledAsLocalAdministrator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">CustomSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">DefaultOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">EnableMaintenanceModeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput">InstanceIamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">UserEnabledAsLocalAdministratorInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">DefaultOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">InstanceIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIdInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```csharp
public string CustomSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `DefaultOuInput`<sup>Optional</sup> <a name="DefaultOuInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```csharp
public string DefaultOuInput { get; }
```

- *Type:* string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```csharp
public bool|IResolvable EnableInternetAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableMaintenanceModeInput`<sup>Optional</sup> <a name="EnableMaintenanceModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```csharp
public bool|IResolvable EnableMaintenanceModeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceIamRoleArnInput`<sup>Optional</sup> <a name="InstanceIamRoleArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput"></a>

```csharp
public string InstanceIamRoleArnInput { get; }
```

- *Type:* string

---

##### `UserEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```csharp
public bool|IResolvable UserEnabledAsLocalAdministratorInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomSecurityGroupId`<sup>Required</sup> <a name="CustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```csharp
public string CustomSecurityGroupId { get; }
```

- *Type:* string

---

##### `DefaultOu`<sup>Required</sup> <a name="DefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```csharp
public string DefaultOu { get; }
```

- *Type:* string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```csharp
public bool|IResolvable EnableInternetAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableMaintenanceMode`<sup>Required</sup> <a name="EnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```csharp
public bool|IResolvable EnableMaintenanceMode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceIamRoleArn`<sup>Required</sup> <a name="InstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```csharp
public string InstanceIamRoleArn { get; }
```

- *Type:* string

---

##### `UserEnabledAsLocalAdministrator`<sup>Required</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```csharp
public bool|IResolvable UserEnabledAsLocalAdministrator { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesDirectoryWorkspaceCreationProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



