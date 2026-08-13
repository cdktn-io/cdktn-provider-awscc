# `dataAwsccWorkspaceswebBrowserSettingsPlural` Submodule <a name="`dataAwsccWorkspaceswebBrowserSettingsPlural` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebBrowserSettingsPlural <a name="DataAwsccWorkspaceswebBrowserSettingsPlural" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspacesweb_browser_settings_plural awscc_workspacesweb_browser_settings_plural}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebBrowserSettingsPlural(Construct Scope, string Id, DataAwsccWorkspaceswebBrowserSettingsPluralConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig">DataAwsccWorkspaceswebBrowserSettingsPluralConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig">DataAwsccWorkspaceswebBrowserSettingsPluralConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebBrowserSettingsPlural resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebBrowserSettingsPlural.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebBrowserSettingsPlural.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebBrowserSettingsPlural.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebBrowserSettingsPlural.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebBrowserSettingsPlural resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspaceswebBrowserSettingsPlural to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspaceswebBrowserSettingsPlural that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspacesweb_browser_settings_plural#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebBrowserSettingsPlural to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPlural.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebBrowserSettingsPluralConfig <a name="DataAwsccWorkspaceswebBrowserSettingsPluralConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebBrowserSettingsPluralConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebBrowserSettingsPlural.DataAwsccWorkspaceswebBrowserSettingsPluralConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---



