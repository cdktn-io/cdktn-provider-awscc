# `dataAwsccDirectconnectTransitVirtualInterface` Submodule <a name="`dataAwsccDirectconnectTransitVirtualInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectconnectTransitVirtualInterface <a name="DataAwsccDirectconnectTransitVirtualInterface" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/directconnect_transit_virtual_interface awscc_directconnect_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterface(Construct Scope, string Id, DataAwsccDirectconnectTransitVirtualInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig">DataAwsccDirectconnectTransitVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig">DataAwsccDirectconnectTransitVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectTransitVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectTransitVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectTransitVirtualInterface.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectTransitVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectconnectTransitVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectconnectTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/directconnect_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectconnectTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn">AllocateTransitVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.enableSiteLink">EnableSiteLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList">DataAwsccDirectconnectTransitVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocateTransitVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn"></a>

```csharp
public string AllocateTransitVirtualInterfaceRoleArn { get; }
```

- *Type:* string

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.bgpPeers"></a>

```csharp
public DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList BgpPeers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList</a>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; }
```

- *Type:* string

---

##### `EnableSiteLink`<sup>Required</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.enableSiteLink"></a>

```csharp
public IResolvable EnableSiteLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tags"></a>

```csharp
public DataAwsccDirectconnectTransitVirtualInterfaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList">DataAwsccDirectconnectTransitVirtualInterfaceTagsList</a>

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceArn"></a>

```csharp
public string VirtualInterfaceArn { get; }
```

- *Type:* string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers {

};
```


### DataAwsccDirectconnectTransitVirtualInterfaceConfig <a name="DataAwsccDirectconnectTransitVirtualInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterfaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/directconnect_transit_virtual_interface#id DataAwsccDirectconnectTransitVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectconnectTransitVirtualInterfaceTags <a name="DataAwsccDirectconnectTransitVirtualInterfaceTags" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterfaceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get"></a>

```csharp
private DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```csharp
public string Asn { get; }
```

- *Type:* string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```csharp
public string AuthKey { get; }
```

- *Type:* string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; }
```

- *Type:* string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers</a>

---


### DataAwsccDirectconnectTransitVirtualInterfaceTagsList <a name="DataAwsccDirectconnectTransitVirtualInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterfaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get"></a>

```csharp
private DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference <a name="DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags">DataAwsccDirectconnectTransitVirtualInterfaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDirectconnectTransitVirtualInterfaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags">DataAwsccDirectconnectTransitVirtualInterfaceTags</a>

---



