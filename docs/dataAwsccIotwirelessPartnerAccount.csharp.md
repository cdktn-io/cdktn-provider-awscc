# `dataAwsccIotwirelessPartnerAccount` Submodule <a name="`dataAwsccIotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessPartnerAccount <a name="DataAwsccIotwirelessPartnerAccount" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccount(Construct Scope, string Id, DataAwsccIotwirelessPartnerAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig">DataAwsccIotwirelessPartnerAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig">DataAwsccIotwirelessPartnerAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessPartnerAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessPartnerAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessPartnerAccount.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessPartnerAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotwirelessPartnerAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.accountLinked">AccountLinked</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerAccountId">PartnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerType">PartnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkResponse">SidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkUpdate">SidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList">DataAwsccIotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountLinked`<sup>Required</sup> <a name="AccountLinked" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.accountLinked"></a>

```csharp
public IResolvable AccountLinked { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `PartnerAccountId`<sup>Required</sup> <a name="PartnerAccountId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerAccountId"></a>

```csharp
public string PartnerAccountId { get; }
```

- *Type:* string

---

##### `PartnerType`<sup>Required</sup> <a name="PartnerType" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerType"></a>

```csharp
public string PartnerType { get; }
```

- *Type:* string

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalk"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountSidewalkOutputReference Sidewalk { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `SidewalkResponse`<sup>Required</sup> <a name="SidewalkResponse" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkResponse"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference SidewalkResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `SidewalkUpdate`<sup>Required</sup> <a name="SidewalkUpdate" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference SidewalkUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tags"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList">DataAwsccIotwirelessPartnerAccountTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessPartnerAccountConfig <a name="DataAwsccIotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_partner_account#id DataAwsccIotwirelessPartnerAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessPartnerAccountSidewalk <a name="DataAwsccIotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountSidewalk {

};
```


### DataAwsccIotwirelessPartnerAccountSidewalkResponse <a name="DataAwsccIotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountSidewalkResponse {

};
```


### DataAwsccIotwirelessPartnerAccountSidewalkUpdate <a name="DataAwsccIotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountSidewalkUpdate {

};
```


### DataAwsccIotwirelessPartnerAccountTags <a name="DataAwsccIotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessPartnerAccountSidewalkOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountSidewalkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk">DataAwsccIotwirelessPartnerAccountSidewalk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppServerPrivateKey`<sup>Required</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```csharp
public string AppServerPrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountSidewalk InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk">DataAwsccIotwirelessPartnerAccountSidewalk</a>

---


### DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">AmazonId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse">DataAwsccIotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonId`<sup>Required</sup> <a name="AmazonId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```csharp
public string AmazonId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountSidewalkResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse">DataAwsccIotwirelessPartnerAccountSidewalkResponse</a>

---


### DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate">DataAwsccIotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppServerPrivateKey`<sup>Required</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```csharp
public string AppServerPrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountSidewalkUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate">DataAwsccIotwirelessPartnerAccountSidewalkUpdate</a>

---


### DataAwsccIotwirelessPartnerAccountTagsList <a name="DataAwsccIotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get"></a>

```csharp
private DataAwsccIotwirelessPartnerAccountTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotwirelessPartnerAccountTagsOutputReference <a name="DataAwsccIotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessPartnerAccountTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags">DataAwsccIotwirelessPartnerAccountTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotwirelessPartnerAccountTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags">DataAwsccIotwirelessPartnerAccountTags</a>

---



