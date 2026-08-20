# `dataAwsccVpclatticeResourceConfiguration` Submodule <a name="`dataAwsccVpclatticeResourceConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeResourceConfiguration <a name="DataAwsccVpclatticeResourceConfiguration" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfiguration(Construct Scope, string Id, DataAwsccVpclatticeResourceConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig">DataAwsccVpclatticeResourceConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig">DataAwsccVpclatticeResourceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVpclatticeResourceConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVpclatticeResourceConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVpclatticeResourceConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVpclatticeResourceConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccVpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVpclatticeResourceConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVpclatticeResourceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeResourceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork">AllowAssociationToSharableServiceNetwork</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.domainVerificationId">DomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.groupDomain">GroupDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationAuthType">ResourceConfigurationAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationDefinition">ResourceConfigurationDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationGroupId">ResourceConfigurationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationType">ResourceConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList">DataAwsccVpclatticeResourceConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowAssociationToSharableServiceNetwork`<sup>Required</sup> <a name="AllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork"></a>

```csharp
public IResolvable AllowAssociationToSharableServiceNetwork { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; }
```

- *Type:* string

---

##### `DomainVerificationId`<sup>Required</sup> <a name="DomainVerificationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.domainVerificationId"></a>

```csharp
public string DomainVerificationId { get; }
```

- *Type:* string

---

##### `GroupDomain`<sup>Required</sup> <a name="GroupDomain" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.groupDomain"></a>

```csharp
public string GroupDomain { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `ResourceConfigurationAuthType`<sup>Required</sup> <a name="ResourceConfigurationAuthType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationAuthType"></a>

```csharp
public string ResourceConfigurationAuthType { get; }
```

- *Type:* string

---

##### `ResourceConfigurationDefinition`<sup>Required</sup> <a name="ResourceConfigurationDefinition" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationDefinition"></a>

```csharp
public DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference ResourceConfigurationDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a>

---

##### `ResourceConfigurationGroupId`<sup>Required</sup> <a name="ResourceConfigurationGroupId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationGroupId"></a>

```csharp
public string ResourceConfigurationGroupId { get; }
```

- *Type:* string

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; }
```

- *Type:* string

---

##### `ResourceConfigurationType`<sup>Required</sup> <a name="ResourceConfigurationType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceConfigurationType"></a>

```csharp
public string ResourceConfigurationType { get; }
```

- *Type:* string

---

##### `ResourceGatewayId`<sup>Required</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.resourceGatewayId"></a>

```csharp
public string ResourceGatewayId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.tags"></a>

```csharp
public DataAwsccVpclatticeResourceConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList">DataAwsccVpclatticeResourceConfigurationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeResourceConfigurationConfig <a name="DataAwsccVpclatticeResourceConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_resource_configuration#id DataAwsccVpclatticeResourceConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition <a name="DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition {

};
```


### DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource <a name="DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource {

};
```


### DataAwsccVpclatticeResourceConfigurationTags <a name="DataAwsccVpclatticeResourceConfigurationTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference <a name="DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---


### DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference <a name="DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource">ArnResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource">DnsResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource">IpResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnResource`<sup>Required</sup> <a name="ArnResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource"></a>

```csharp
public string ArnResource { get; }
```

- *Type:* string

---

##### `DnsResource`<sup>Required</sup> <a name="DnsResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource"></a>

```csharp
public DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference DnsResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a>

---

##### `IpResource`<sup>Required</sup> <a name="IpResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource"></a>

```csharp
public string IpResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition">DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---


### DataAwsccVpclatticeResourceConfigurationTagsList <a name="DataAwsccVpclatticeResourceConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.get"></a>

```csharp
private DataAwsccVpclatticeResourceConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccVpclatticeResourceConfigurationTagsOutputReference <a name="DataAwsccVpclatticeResourceConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVpclatticeResourceConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTags">DataAwsccVpclatticeResourceConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVpclatticeResourceConfigurationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceConfiguration.DataAwsccVpclatticeResourceConfigurationTags">DataAwsccVpclatticeResourceConfigurationTags</a>

---



