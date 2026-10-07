# `dataAwsccDirectoryserviceMicrosoftAd` Submodule <a name="`dataAwsccDirectoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectoryserviceMicrosoftAd <a name="DataAwsccDirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectoryserviceMicrosoftAd(Construct Scope, string Id, DataAwsccDirectoryserviceMicrosoftAdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig">DataAwsccDirectoryserviceMicrosoftAdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig">DataAwsccDirectoryserviceMicrosoftAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectoryserviceMicrosoftAd.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectoryserviceMicrosoftAd.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectoryserviceMicrosoftAd.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectoryserviceMicrosoftAd.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectoryserviceMicrosoftAd to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.createAlias">CreateAlias</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.enableSso">EnableSso</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference">DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.createAlias"></a>

```csharp
public IResolvable CreateAlias { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```csharp
public string[] DnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.enableSso"></a>

```csharp
public IResolvable EnableSso { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```csharp
public DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference VpcSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference">DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectoryserviceMicrosoftAdConfig <a name="DataAwsccDirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectoryserviceMicrosoftAdConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad#id DataAwsccDirectoryserviceMicrosoftAd#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectoryserviceMicrosoftAdVpcSettings <a name="DataAwsccDirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectoryserviceMicrosoftAdVpcSettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings">DataAwsccDirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDirectoryserviceMicrosoftAdVpcSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings">DataAwsccDirectoryserviceMicrosoftAdVpcSettings</a>

---



