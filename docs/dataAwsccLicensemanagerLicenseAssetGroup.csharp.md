# `dataAwsccLicensemanagerLicenseAssetGroup` Submodule <a name="`dataAwsccLicensemanagerLicenseAssetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerLicenseAssetGroup <a name="DataAwsccLicensemanagerLicenseAssetGroup" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroup(Construct Scope, string Id, DataAwsccLicensemanagerLicenseAssetGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig">DataAwsccLicensemanagerLicenseAssetGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig">DataAwsccLicensemanagerLicenseAssetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLicensemanagerLicenseAssetGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLicensemanagerLicenseAssetGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLicensemanagerLicenseAssetGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLicensemanagerLicenseAssetGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLicensemanagerLicenseAssetGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLicensemanagerLicenseAssetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerLicenseAssetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs">AssociatedLicenseAssetRulesetArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn">LicenseAssetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations">LicenseAssetGroupConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList">DataAwsccLicensemanagerLicenseAssetGroupPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList">DataAwsccLicensemanagerLicenseAssetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AssociatedLicenseAssetRulesetArNs`<sup>Required</sup> <a name="AssociatedLicenseAssetRulesetArNs" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs"></a>

```csharp
public string[] AssociatedLicenseAssetRulesetArNs { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LicenseAssetGroupArn`<sup>Required</sup> <a name="LicenseAssetGroupArn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn"></a>

```csharp
public string LicenseAssetGroupArn { get; }
```

- *Type:* string

---

##### `LicenseAssetGroupConfigurations`<sup>Required</sup> <a name="LicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations"></a>

```csharp
public DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList LicenseAssetGroupConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.properties"></a>

```csharp
public DataAwsccLicensemanagerLicenseAssetGroupPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList">DataAwsccLicensemanagerLicenseAssetGroupPropertiesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tags"></a>

```csharp
public DataAwsccLicensemanagerLicenseAssetGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList">DataAwsccLicensemanagerLicenseAssetGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerLicenseAssetGroupConfig <a name="DataAwsccLicensemanagerLicenseAssetGroupConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group#id DataAwsccLicensemanagerLicenseAssetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations {

};
```


### DataAwsccLicensemanagerLicenseAssetGroupProperties <a name="DataAwsccLicensemanagerLicenseAssetGroupProperties" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupProperties {

};
```


### DataAwsccLicensemanagerLicenseAssetGroupTags <a name="DataAwsccLicensemanagerLicenseAssetGroupTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get"></a>

```csharp
private DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension">UsageDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsageDimension`<sup>Required</sup> <a name="UsageDimension" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension"></a>

```csharp
public string UsageDimension { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>

---


### DataAwsccLicensemanagerLicenseAssetGroupPropertiesList <a name="DataAwsccLicensemanagerLicenseAssetGroupPropertiesList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get"></a>

```csharp
private DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties">DataAwsccLicensemanagerLicenseAssetGroupProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLicensemanagerLicenseAssetGroupProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties">DataAwsccLicensemanagerLicenseAssetGroupProperties</a>

---


### DataAwsccLicensemanagerLicenseAssetGroupTagsList <a name="DataAwsccLicensemanagerLicenseAssetGroupTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get"></a>

```csharp
private DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags">DataAwsccLicensemanagerLicenseAssetGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLicensemanagerLicenseAssetGroupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags">DataAwsccLicensemanagerLicenseAssetGroupTags</a>

---



