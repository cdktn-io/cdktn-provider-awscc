# `dataAwsccMediaconnectSourceEndpoint` Submodule <a name="`dataAwsccMediaconnectSourceEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectSourceEndpoint <a name="DataAwsccMediaconnectSourceEndpoint" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpoint(Construct Scope, string Id, DataAwsccMediaconnectSourceEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig">DataAwsccMediaconnectSourceEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig">DataAwsccMediaconnectSourceEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectSourceEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectSourceEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectSourceEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectSourceEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectSourceEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectSourceEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectSourceEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.associatedResourceDetails">AssociatedResourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycleManagement">LifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.registrationState">RegistrationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceEndpointId">SourceEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList">DataAwsccMediaconnectSourceEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociatedResourceDetails`<sup>Required</sup> <a name="AssociatedResourceDetails" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.associatedResourceDetails"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference AssociatedResourceDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.configuration"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationOutputReference</a>

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LifecycleManagement`<sup>Required</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycleManagement"></a>

```csharp
public string LifecycleManagement { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `RegistrationState`<sup>Required</sup> <a name="RegistrationState" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.registrationState"></a>

```csharp
public string RegistrationState { get; }
```

- *Type:* string

---

##### `SourceEndpointId`<sup>Required</sup> <a name="SourceEndpointId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceEndpointId"></a>

```csharp
public string SourceEndpointId { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tags"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList">DataAwsccMediaconnectSourceEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails {

};
```


### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput {

};
```


### DataAwsccMediaconnectSourceEndpointConfig <a name="DataAwsccMediaconnectSourceEndpointConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint#id DataAwsccMediaconnectSourceEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectSourceEndpointConfiguration <a name="DataAwsccMediaconnectSourceEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfiguration {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput <a name="DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandard <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandard {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules {

};
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc {

};
```


### DataAwsccMediaconnectSourceEndpointTags <a name="DataAwsccMediaconnectSourceEndpointTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.routerOutput">RouterOutput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.standard">Standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterOutput`<sup>Required</sup> <a name="RouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.routerOutput"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference RouterOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```csharp
public string Standard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails</a>

---


### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.maximumBitrate"></a>

```csharp
public double MaximumBitrate { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.routerOutput">RouterOutput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration">DataAwsccMediaconnectSourceEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterOutput`<sup>Required</sup> <a name="RouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.routerOutput"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference RouterOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.standard"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference Standard { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration">DataAwsccMediaconnectSourceEndpointConfiguration</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArn">RouterOutputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterOutputArn`<sup>Required</sup> <a name="RouterOutputArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArn"></a>

```csharp
public string RouterOutputArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfiguration">SourceNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingType">SourceNetworkingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard">DataAwsccMediaconnectSourceEndpointConfigurationStandard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference ProtocolConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `SourceNetworkingConfiguration`<sup>Required</sup> <a name="SourceNetworkingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfiguration"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference SourceNetworkingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference</a>

---

##### `SourceNetworkingType`<sup>Required</sup> <a name="SourceNetworkingType" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingType"></a>

```csharp
public string SourceNetworkingType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandard InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard">DataAwsccMediaconnectSourceEndpointConfigurationStandard</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference Rist { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference Rtp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference SrtCaller { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference SrtListener { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds">RecoveryLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `RecoveryLatencyMilliseconds`<sup>Required</sup> <a name="RecoveryLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```csharp
public double RecoveryLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `ForwardErrorCorrectionState`<sup>Required</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```csharp
public string ForwardErrorCorrectionState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference EncryptionPassphrase { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference EncryptionPassphrase { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddress"></a>

```csharp
public string SourceAddress { get; }
```

- *Type:* string

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.public"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference Public { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpc"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRules">SourceAllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceAllowRules`<sup>Required</sup> <a name="SourceAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRules"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList SourceAllowRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get"></a>

```csharp
private DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a>

---


### DataAwsccMediaconnectSourceEndpointTagsList <a name="DataAwsccMediaconnectSourceEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.get"></a>

```csharp
private DataAwsccMediaconnectSourceEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectSourceEndpointTagsOutputReference <a name="DataAwsccMediaconnectSourceEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectSourceEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags">DataAwsccMediaconnectSourceEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectSourceEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags">DataAwsccMediaconnectSourceEndpointTags</a>

---



