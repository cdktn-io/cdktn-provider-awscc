# `dataAwsccWorkspaceswebIpAccessSettings` Submodule <a name="`dataAwsccWorkspaceswebIpAccessSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebIpAccessSettings <a name="DataAwsccWorkspaceswebIpAccessSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspacesweb_ip_access_settings awscc_workspacesweb_ip_access_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettings(Construct Scope, string Id, DataAwsccWorkspaceswebIpAccessSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig">DataAwsccWorkspaceswebIpAccessSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig">DataAwsccWorkspaceswebIpAccessSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebIpAccessSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebIpAccessSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebIpAccessSettings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebIpAccessSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspaceswebIpAccessSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspaceswebIpAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebIpAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipAccessSettingsArn">IpAccessSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipRules">IpRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList">DataAwsccWorkspaceswebIpAccessSettingsIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList">DataAwsccWorkspaceswebIpAccessSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.additionalEncryptionContext"></a>

```csharp
public StringMap AdditionalEncryptionContext { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.associatedPortalArns"></a>

```csharp
public string[] AssociatedPortalArns { get; }
```

- *Type:* string[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IpAccessSettingsArn`<sup>Required</sup> <a name="IpAccessSettingsArn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipAccessSettingsArn"></a>

```csharp
public string IpAccessSettingsArn { get; }
```

- *Type:* string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.ipRules"></a>

```csharp
public DataAwsccWorkspaceswebIpAccessSettingsIpRulesList IpRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList">DataAwsccWorkspaceswebIpAccessSettingsIpRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tags"></a>

```csharp
public DataAwsccWorkspaceswebIpAccessSettingsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList">DataAwsccWorkspaceswebIpAccessSettingsTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebIpAccessSettingsConfig <a name="DataAwsccWorkspaceswebIpAccessSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspacesweb_ip_access_settings#id DataAwsccWorkspaceswebIpAccessSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebIpAccessSettingsIpRules <a name="DataAwsccWorkspaceswebIpAccessSettingsIpRules" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettingsIpRules {

};
```


### DataAwsccWorkspaceswebIpAccessSettingsTags <a name="DataAwsccWorkspaceswebIpAccessSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettingsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebIpAccessSettingsIpRulesList <a name="DataAwsccWorkspaceswebIpAccessSettingsIpRulesList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettingsIpRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.get"></a>

```csharp
private DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference <a name="DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules">DataAwsccWorkspaceswebIpAccessSettingsIpRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspaceswebIpAccessSettingsIpRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsIpRules">DataAwsccWorkspaceswebIpAccessSettingsIpRules</a>

---


### DataAwsccWorkspaceswebIpAccessSettingsTagsList <a name="DataAwsccWorkspaceswebIpAccessSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettingsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.get"></a>

```csharp
private DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags">DataAwsccWorkspaceswebIpAccessSettingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspaceswebIpAccessSettingsTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebIpAccessSettings.DataAwsccWorkspaceswebIpAccessSettingsTags">DataAwsccWorkspaceswebIpAccessSettingsTags</a>

---



