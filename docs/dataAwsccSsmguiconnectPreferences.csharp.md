# `dataAwsccSsmguiconnectPreferences` Submodule <a name="`dataAwsccSsmguiconnectPreferences` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmguiconnectPreferences <a name="DataAwsccSsmguiconnectPreferences" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmguiconnect_preferences awscc_ssmguiconnect_preferences}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferences(Construct Scope, string Id, DataAwsccSsmguiconnectPreferencesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig">DataAwsccSsmguiconnectPreferencesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig">DataAwsccSsmguiconnectPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmguiconnectPreferences resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmguiconnectPreferences.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmguiconnectPreferences.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmguiconnectPreferences.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmguiconnectPreferences.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSsmguiconnectPreferences resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmguiconnectPreferences to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmguiconnectPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmguiconnect_preferences#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmguiconnectPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.connectionRecordingPreferences">ConnectionRecordingPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ConnectionRecordingPreferences`<sup>Required</sup> <a name="ConnectionRecordingPreferences" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.connectionRecordingPreferences"></a>

```csharp
public DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference ConnectionRecordingPreferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferences.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmguiconnectPreferencesConfig <a name="DataAwsccSsmguiconnectPreferencesConfig" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmguiconnect_preferences#id DataAwsccSsmguiconnectPreferences#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences <a name="DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences {

};
```


### DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations <a name="DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations {

};
```


### DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets <a name="DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference <a name="DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations">RecordingDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `RecordingDestinations`<sup>Required</sup> <a name="RecordingDestinations" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations"></a>

```csharp
public DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference RecordingDestinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferences</a>

---


### DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference <a name="DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets">S3Buckets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets"></a>

```csharp
public DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList S3Buckets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---


### DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList <a name="DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get"></a>

```csharp
private DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference <a name="DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmguiconnectPreferences.DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">DataAwsccSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>

---



