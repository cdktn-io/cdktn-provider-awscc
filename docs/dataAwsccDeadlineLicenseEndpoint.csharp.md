# `dataAwsccDeadlineLicenseEndpoint` Submodule <a name="`dataAwsccDeadlineLicenseEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDeadlineLicenseEndpoint <a name="DataAwsccDeadlineLicenseEndpoint" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_license_endpoint awscc_deadline_license_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineLicenseEndpoint(Construct Scope, string Id, DataAwsccDeadlineLicenseEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig">DataAwsccDeadlineLicenseEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig">DataAwsccDeadlineLicenseEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDeadlineLicenseEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineLicenseEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineLicenseEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineLicenseEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineLicenseEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDeadlineLicenseEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDeadlineLicenseEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDeadlineLicenseEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_license_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDeadlineLicenseEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.licenseEndpointId">LicenseEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList">DataAwsccDeadlineLicenseEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `LicenseEndpointId`<sup>Required</sup> <a name="LicenseEndpointId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.licenseEndpointId"></a>

```csharp
public string LicenseEndpointId { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.tags"></a>

```csharp
public DataAwsccDeadlineLicenseEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList">DataAwsccDeadlineLicenseEndpointTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDeadlineLicenseEndpointConfig <a name="DataAwsccDeadlineLicenseEndpointConfig" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineLicenseEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_license_endpoint#id DataAwsccDeadlineLicenseEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDeadlineLicenseEndpointTags <a name="DataAwsccDeadlineLicenseEndpointTags" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineLicenseEndpointTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDeadlineLicenseEndpointTagsList <a name="DataAwsccDeadlineLicenseEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineLicenseEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.get"></a>

```csharp
private DataAwsccDeadlineLicenseEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDeadlineLicenseEndpointTagsOutputReference <a name="DataAwsccDeadlineLicenseEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineLicenseEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTags">DataAwsccDeadlineLicenseEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineLicenseEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineLicenseEndpoint.DataAwsccDeadlineLicenseEndpointTags">DataAwsccDeadlineLicenseEndpointTags</a>

---



