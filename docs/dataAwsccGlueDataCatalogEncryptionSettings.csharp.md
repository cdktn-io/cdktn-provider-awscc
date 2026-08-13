# `dataAwsccGlueDataCatalogEncryptionSettings` Submodule <a name="`dataAwsccGlueDataCatalogEncryptionSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueDataCatalogEncryptionSettings <a name="DataAwsccGlueDataCatalogEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_data_catalog_encryption_settings awscc_glue_data_catalog_encryption_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettings(Construct Scope, string Id, DataAwsccGlueDataCatalogEncryptionSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig">DataAwsccGlueDataCatalogEncryptionSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig">DataAwsccGlueDataCatalogEncryptionSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueDataCatalogEncryptionSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueDataCatalogEncryptionSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueDataCatalogEncryptionSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueDataCatalogEncryptionSettings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueDataCatalogEncryptionSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGlueDataCatalogEncryptionSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueDataCatalogEncryptionSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueDataCatalogEncryptionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_data_catalog_encryption_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueDataCatalogEncryptionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettings">DataCatalogEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DataCatalogEncryptionSettings`<sup>Required</sup> <a name="DataCatalogEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettings"></a>

```csharp
public DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference DataCatalogEncryptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueDataCatalogEncryptionSettingsConfig <a name="DataAwsccGlueDataCatalogEncryptionSettingsConfig" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettingsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_data_catalog_encryption_settings#id DataAwsccGlueDataCatalogEncryptionSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings <a name="DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {

};
```


### DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption <a name="DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {

};
```


### DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest <a name="DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference <a name="DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncrypted">ReturnConnectionPasswordEncrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ReturnConnectionPasswordEncrypted`<sup>Required</sup> <a name="ReturnConnectionPasswordEncrypted" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncrypted"></a>

```csharp
public IResolvable ReturnConnectionPasswordEncrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a>

---


### DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference <a name="DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionMode">CatalogEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionServiceRole">CatalogEncryptionServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyId">SseAwsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogEncryptionMode`<sup>Required</sup> <a name="CatalogEncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionMode"></a>

```csharp
public string CatalogEncryptionMode { get; }
```

- *Type:* string

---

##### `CatalogEncryptionServiceRole`<sup>Required</sup> <a name="CatalogEncryptionServiceRole" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionServiceRole"></a>

```csharp
public string CatalogEncryptionServiceRole { get; }
```

- *Type:* string

---

##### `SseAwsKmsKeyId`<sup>Required</sup> <a name="SseAwsKmsKeyId" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyId"></a>

```csharp
public string SseAwsKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a>

---


### DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference <a name="DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryption">ConnectionPasswordEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRest">EncryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionPasswordEncryption`<sup>Required</sup> <a name="ConnectionPasswordEncryption" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryption"></a>

```csharp
public DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference ConnectionPasswordEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference</a>

---

##### `EncryptionAtRest`<sup>Required</sup> <a name="EncryptionAtRest" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRest"></a>

```csharp
public DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference EncryptionAtRest { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDataCatalogEncryptionSettings.DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">DataAwsccGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a>

---



