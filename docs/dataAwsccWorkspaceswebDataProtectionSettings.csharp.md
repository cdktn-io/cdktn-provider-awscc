# `dataAwsccWorkspaceswebDataProtectionSettings` Submodule <a name="`dataAwsccWorkspaceswebDataProtectionSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebDataProtectionSettings <a name="DataAwsccWorkspaceswebDataProtectionSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/workspacesweb_data_protection_settings awscc_workspacesweb_data_protection_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettings(Construct Scope, string Id, DataAwsccWorkspaceswebDataProtectionSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig">DataAwsccWorkspaceswebDataProtectionSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig">DataAwsccWorkspaceswebDataProtectionSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebDataProtectionSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebDataProtectionSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebDataProtectionSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebDataProtectionSettings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebDataProtectionSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebDataProtectionSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspaceswebDataProtectionSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspaceswebDataProtectionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebDataProtectionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn">DataProtectionSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration">InlineRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList">DataAwsccWorkspaceswebDataProtectionSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.additionalEncryptionContext"></a>

```csharp
public StringMap AdditionalEncryptionContext { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.associatedPortalArns"></a>

```csharp
public string[] AssociatedPortalArns { get; }
```

- *Type:* string[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; }
```

- *Type:* string

---

##### `DataProtectionSettingsArn`<sup>Required</sup> <a name="DataProtectionSettingsArn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn"></a>

```csharp
public string DataProtectionSettingsArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InlineRedactionConfiguration`<sup>Required</sup> <a name="InlineRedactionConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference InlineRedactionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tags"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList">DataAwsccWorkspaceswebDataProtectionSettingsTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebDataProtectionSettingsConfig <a name="DataAwsccWorkspaceswebDataProtectionSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/workspacesweb_data_protection_settings#id DataAwsccWorkspaceswebDataProtectionSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration {

};
```


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns {

};
```


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern {

};
```


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder {

};
```


### DataAwsccWorkspaceswebDataProtectionSettingsTags <a name="DataAwsccWorkspaceswebDataProtectionSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegex">KeywordRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescription">PatternDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternName">PatternName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegex">PatternRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeywordRegex`<sup>Required</sup> <a name="KeywordRegex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegex"></a>

```csharp
public string KeywordRegex { get; }
```

- *Type:* string

---

##### `PatternDescription`<sup>Required</sup> <a name="PatternDescription" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescription"></a>

```csharp
public string PatternDescription { get; }
```

- *Type:* string

---

##### `PatternName`<sup>Required</sup> <a name="PatternName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternName"></a>

```csharp
public string PatternName { get; }
```

- *Type:* string

---

##### `PatternRegex`<sup>Required</sup> <a name="PatternRegex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegex"></a>

```csharp
public string PatternRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get"></a>

```csharp
private DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternId">BuiltInPatternId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPattern">CustomPattern</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrls">EnforcedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrls">ExemptUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolder">RedactionPlaceHolder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuiltInPatternId`<sup>Required</sup> <a name="BuiltInPatternId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternId"></a>

```csharp
public string BuiltInPatternId { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevel"></a>

```csharp
public double ConfidenceLevel { get; }
```

- *Type:* double

---

##### `CustomPattern`<sup>Required</sup> <a name="CustomPattern" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPattern"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference CustomPattern { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference</a>

---

##### `EnforcedUrls`<sup>Required</sup> <a name="EnforcedUrls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrls"></a>

```csharp
public string[] EnforcedUrls { get; }
```

- *Type:* string[]

---

##### `ExemptUrls`<sup>Required</sup> <a name="ExemptUrls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrls"></a>

```csharp
public string[] ExemptUrls { get; }
```

- *Type:* string[]

---

##### `RedactionPlaceHolder`<sup>Required</sup> <a name="RedactionPlaceHolder" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolder"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference RedactionPlaceHolder { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText">RedactionPlaceHolderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType">RedactionPlaceHolderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedactionPlaceHolderText`<sup>Required</sup> <a name="RedactionPlaceHolderText" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText"></a>

```csharp
public string RedactionPlaceHolderText { get; }
```

- *Type:* string

---

##### `RedactionPlaceHolderType`<sup>Required</sup> <a name="RedactionPlaceHolderType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType"></a>

```csharp
public string RedactionPlaceHolderType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel">GlobalConfidenceLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls">GlobalEnforcedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls">GlobalExemptUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatterns">InlineRedactionPatterns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlobalConfidenceLevel`<sup>Required</sup> <a name="GlobalConfidenceLevel" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel"></a>

```csharp
public double GlobalConfidenceLevel { get; }
```

- *Type:* double

---

##### `GlobalEnforcedUrls`<sup>Required</sup> <a name="GlobalEnforcedUrls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls"></a>

```csharp
public string[] GlobalEnforcedUrls { get; }
```

- *Type:* string[]

---

##### `GlobalExemptUrls`<sup>Required</sup> <a name="GlobalExemptUrls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls"></a>

```csharp
public string[] GlobalExemptUrls { get; }
```

- *Type:* string[]

---

##### `InlineRedactionPatterns`<sup>Required</sup> <a name="InlineRedactionPatterns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatterns"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList InlineRedactionPatterns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsTagsList <a name="DataAwsccWorkspaceswebDataProtectionSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.get"></a>

```csharp
private DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags">DataAwsccWorkspaceswebDataProtectionSettingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspaceswebDataProtectionSettingsTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags">DataAwsccWorkspaceswebDataProtectionSettingsTags</a>

---



