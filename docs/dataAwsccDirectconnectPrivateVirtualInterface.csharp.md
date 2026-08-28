# `dataAwsccDirectconnectPrivateVirtualInterface` Submodule <a name="`dataAwsccDirectconnectPrivateVirtualInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectconnectPrivateVirtualInterface <a name="DataAwsccDirectconnectPrivateVirtualInterface" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterface(Construct Scope, string Id, DataAwsccDirectconnectPrivateVirtualInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig">DataAwsccDirectconnectPrivateVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig">DataAwsccDirectconnectPrivateVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectPrivateVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectPrivateVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectPrivateVirtualInterface.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectPrivateVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectconnectPrivateVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectconnectPrivateVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/directconnect_private_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectconnectPrivateVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn">AllocatePrivateVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList">DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.enableSiteLink">EnableSiteLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.rateLimit">RateLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList">DataAwsccDirectconnectPrivateVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualGatewayId">VirtualGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocatePrivateVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```csharp
public string AllocatePrivateVirtualInterfaceRoleArn { get; }
```

- *Type:* string

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.bgpPeers"></a>

```csharp
public DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList BgpPeers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList">DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList</a>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; }
```

- *Type:* string

---

##### `EnableSiteLink`<sup>Required</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.enableSiteLink"></a>

```csharp
public IResolvable EnableSiteLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.rateLimit"></a>

```csharp
public string RateLimit { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.tags"></a>

```csharp
public DataAwsccDirectconnectPrivateVirtualInterfaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList">DataAwsccDirectconnectPrivateVirtualInterfaceTagsList</a>

---

##### `VirtualGatewayId`<sup>Required</sup> <a name="VirtualGatewayId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualGatewayId"></a>

```csharp
public string VirtualGatewayId { get; }
```

- *Type:* string

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualInterfaceArn"></a>

```csharp
public string VirtualInterfaceArn { get; }
```

- *Type:* string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers <a name="DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers {

};
```


### DataAwsccDirectconnectPrivateVirtualInterfaceConfig <a name="DataAwsccDirectconnectPrivateVirtualInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterfaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/directconnect_private_virtual_interface#id DataAwsccDirectconnectPrivateVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectconnectPrivateVirtualInterfaceTags <a name="DataAwsccDirectconnectPrivateVirtualInterfaceTags" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterfaceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList <a name="DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.get"></a>

```csharp
private DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference <a name="DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers">DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```csharp
public string Asn { get; }
```

- *Type:* string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```csharp
public string AuthKey { get; }
```

- *Type:* string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; }
```

- *Type:* string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers">DataAwsccDirectconnectPrivateVirtualInterfaceBgpPeers</a>

---


### DataAwsccDirectconnectPrivateVirtualInterfaceTagsList <a name="DataAwsccDirectconnectPrivateVirtualInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterfaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.get"></a>

```csharp
private DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference <a name="DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTags">DataAwsccDirectconnectPrivateVirtualInterfaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDirectconnectPrivateVirtualInterfaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectPrivateVirtualInterface.DataAwsccDirectconnectPrivateVirtualInterfaceTags">DataAwsccDirectconnectPrivateVirtualInterfaceTags</a>

---



